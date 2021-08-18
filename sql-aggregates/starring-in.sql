
       select "c"."name" as "category name",
       count("c"."name") as "total films"
    from "actors" as "a"
    join "castMembers" using ("actorId")
    join "films" as "f" using ("filmId")
    join "filmCategory" as "fc" using ("filmId")
    join "categories" as "c" using ("categoryId")
    where "a"."actorId" = 178
    group by "c"."name";
