https://developers.notion.com/reference/post-database-query-filter#compound-filter-conditions

/===================================
SELECT *
FROM 'table'
WHERE Engineers LIKE %mary%
  AND (type = 'task'
    OR type = 'bug')
  AND (Priority = 'p1'
    OR (status = 'not started' AND Priority = 'p2'))
  AND Enginners NOT LIKE %b%
  ==================================/