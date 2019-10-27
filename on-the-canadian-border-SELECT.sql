SELECT name,
       country
FROM public.travelers
WHERE country NOT IN ('USA',
                      'Canada',
                      'Mexico');