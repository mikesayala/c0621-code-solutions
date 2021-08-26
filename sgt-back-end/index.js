const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.listen(3000, () => {
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
        select *
        from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  if (req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({ error: 'invalid grade' });
    return;
  }

  if (typeof req.body.name === 'undefined' || typeof req.body.course === 'undefined' || typeof req.body.score === 'undefined') {
    res.status(400).json({ error: 'invalid grade: missing name, course, or score' });
    return;
  }

  const sql = `
       insert into "grades" ("name", "course", "score")
       values($1, $2, $3)
       returning *
 `;
  const params = [req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error has occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const id = req.params.gradeId;
  const params = [req.body.name, req.body.course, req.body.score, id];
  const sql = `
        update "grades"
           set "name" = $1,
               "course" = $2,
               "score" = $3
        where  "gradeId" = $4
        returning *
  `;

  if (id < 0 || typeof req.body.name === 'undefined' || typeof req.body.course === 'undefined' || typeof req.body.score === 'undefined') {
    if (id < 0) {
      res.status(400).json({ error: 'id must be positive integer' });
    } else {
      res.status(400).json({ error: 'request must have content' });
    }
    return;
  }

  db.query(sql, params)
    .then(result => {
      if (result.rows[0] === undefined) {
        res.status(404).json({ error: 'cannot find note with id ' + id });
        return;
      }
      const newGrade = result.rows[0];
      res.status(200).json(newGrade);
    })
    .catch(err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error has occurred' });
      }
    });

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = req.params.gradeId;
  const params = [req.params.gradeId];
  if (id < 1) {
    res.status(400).json({ error: 'gradeId must be positive integer' });
    return;
  }

  const sql = `
        delete from "grades"
        where "gradeId" = $1
        returning *
  `;
  db.query(sql, params)
    .then(result => {
      if (result.rows[0] === undefined) {
        res.status(404).json({ error: 'cannot find gradeId of ' + id });
        return;
      }
      const deletedGrade = result.rows[0];
      res.status(204).json(deletedGrade);
    })
    .catch(err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      }
    });
});
