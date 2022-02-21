Select 
	m.mov_title AS Title,
	(SELECT 
        CONCAT(a.act_fname, a.act_lname) AS "Actor"
    FROM movie_cast AS mc 
        INNER JOIN actor AS a ON mc.act_id = a.act_id
    WHERE
        m.mov_id = mc.mov_id
	),
	ROUND(r.rev_stars, 1) AS Rating,
	m.mov_year AS Released
FROM 
	movie AS m
	INNER JOIN Rating AS r ON m.mov_id = r.mov_id

WHERE
	r.rev_stars >= 8
	AND m.mov_year < 2000
ORDER BY Rating DESC