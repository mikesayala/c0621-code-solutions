select "a"."firstName" as "first Name",
       "a"."lastName" as "last Name"
       from "actors" as "a"
       join "castMembers" using ("actorId")
       join "films" as "f" using ("filmId")
       where "f"."title" = 'Jersey Sassy';
