select "f"."releaseYear" as "year",
       "f"."title" as "title",
       "c"."name" as "categories"
  from "films" as "f"
  join "filmCategory" using ("filmId")
  join "categories" as "c" using ("categoryId")
  where "f"."title" = 'Boogie Amelie';
