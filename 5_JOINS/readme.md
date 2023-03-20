- https://towardsdatascience.com/sql-questions-summary-df90bfe4c9c


## Joins:

- USING muletiple calls to get the results using SELECT queries, this leads to increase in load on system. 
    - RAM 
    - DISK
    - NETWORK
- faster
```
RAM >> DISK >> NETWORK
```
- Our solution should not have multiple calls to db & it should not have duplicates

### Joins:
```
Select * from students s JOINS Batches ON s.id=b.id where b.name = 'JULY2020';
```
- This creates a virtual tables
- V all for row in s:
    - v all for row in b:
        - ON clause

```
select * from invoices;

-- having
select client_id,  sum(invoice_total), count(invoice_id) from invoices
group by client_id having count(invoice_id) >=2

-- where
select client_id,  sum(invoice_total), count(invoice_id) from invoices
where payment_date is not null group by client_id having count(invoice_id) >=2
```
```
-- customer_id, total number of items brought by each customer
select c.customer_id, sum(quantity) as quantity from customers c
left join orders o on o.customer_id = c.customer_id
left join order_items oi on o.order_id = oi.order_id
group by c.customer_id having sum(quantity) > 7
```

