Resource

https://developers.notion.com/reference/post-database-query-filter#compound-filter-conditions


https://www.youtube.com/watch?v=kSfUoItQrHg&t=17s
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

  Example: 
  https://stackblitz.com/edit/stackblitz-starters-ymye2z?file=src%2Fcomponents%2Fnested-form%2Fnested-form.component.html,src%2Fcomponents%2Fnested-form%2Fnested-form.component.ts,src%2Fcomponents%2Fnested-form%2Fnested-form.component.css