select "c"."firstName" as "first name",
       "c"."lastName" as "last name"
  from "customers" as "c"
  join "rentals" as "r" using ("customerId")
  join "inventory" as "i" using ("inventoryId")
  join "films" as "f" using ("filmId")
  where "f"."title" = 'Magic Mallrats';






