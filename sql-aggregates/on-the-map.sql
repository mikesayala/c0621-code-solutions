select "c"."countryId" as "country",
      count("d"."cityId") as "total cities"
    from "countries" as "c"
    join "cities" as "d" using ("countryId")
    group by "c"."countryId";
