select "c"."firstName" as "first name",
       "c"."lastName" as "last name",
       sum("p"."amount") as "total price"
    from "customers" as "c"
    join "payments" as "p" using ("customerId")
    join "rentals" using ("rentalId")
    group by "c"."customerId"
    order by "p"."amount" desc;
