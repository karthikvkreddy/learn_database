-  Aggregates:
   eg: 
   ```
   select MIN(quantity_in_stock), AVG(quantity_in_stock) , SUM(quantity_in_stock), COUNT(*)  from products;
   ```

    - 

- Where VS HAVING:

    - WHERE:
        - before group by      
        - where filters rows
        - cant use aggregates

    - HAVING:
        - after group by
        - filters groups
        - can use aggreegates
