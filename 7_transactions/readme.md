## Transactions 💳

### Agenda:
1. Intro
2. ACID Properties
3. Keywords - start, commit, rollback, demo
4. Isolations levels
5. Deadlocks

### Case 1:
#### Transfer of money from 1 bank to another bank 

1. x = read(A)   => 1000
2. x = x - 200   => 800
3. write(A,x)  => 800
4. x = Read(B)  => 2000         // lost connection ???????
5. x = x+200  => 2200
6. write(B,x) => 2200

`Problem`: Data inconsitency can happen because of failure /crash/ network outage during a set of related operations.

`Solution` : revert to original state

### Transaction:  
    A set  of operations grouped together to make one execution unit.[all or nothing - either all operations belonging to the transaction will happen or none of them].

### Case 2:
#### Transfer  of money from A to B and C to B

1. Task1 : A -> B  (100)
2. Task2 : C -> B (200)

- Task1 and Task2 are concurrent
- Task1 and task2 has same data which is shared.

`Problem`: If concurrent tasks are accessing shared data, race conditions can happen leading to inconsistent data.

`Solution`: Using Transactions


### Keywords:
```
start transaction
s1
s2
s3
commit / rollback
```

### ACID Properties:
- Properties to be followed by transaction
1. Atomic 
    - All transaction should be atomic. ALL or None (either all statements of transaction will run or none)
    - if any failure happens during set of operations of txn, changes will be reverted.
2. Durability 
    - once txn is commited data changes are durable. even if myself fails the changes won't be lost.
3. consistency
    - data should be consistent before and after every txn.
4. Isolation
    - check Below

#### Transactions:
     A set  of operations grouped together to make one execution unit.

Example: 

```
SELECT * FROM products;

start transaction;

UPDATE products
SET name = 'GHI'
WHERE product_id = 10;

SELECT * FROM products;

commit;
rollback;
```

### ISOLATION:
- how my txn is isolated from other txn

-   Current Txn                 [Isolation levels] My Txn

#### Isolation levels:
1. READ UNCOMMITTED
2. READ COMMITTED
3. REPEATABLE READ
4. SERIALIZATION

```
SET SESSION TRANSACTION ISOLATION LEVEL "......"
    START TRANSACTION
        S1
        S2
        S3
        .
        .
    COMMIT/ROLLBACK
```

For All isolation levels :
- what ?
- problem ?
- benefits ?

### 1. READ UNCOMMITTED:

INPUT : X = 2000

    1. 2000, X = 2000
    2. store 1000 to A in RAM, not hard disk.  [commit: store data in hard disk] A = 1000*

    - READ UNCOMMIT:
        - It will read data from the RAM (temparary), but not the data which is permanent.
        - X = (X= X+ 500) 1500*
    
    4. rollback:
        A = 1500* is lost (uncommited data will be lost) : RAM
        Now A = 1000*
    
    3. X = 1000
    5. x= 1500* : returned to temporary - RAM  
    6. x = 1500* : written to RAM
    7. commit x =1500 : written to hard disk 

Output: 1500

`Note`: * RAM storage

Problems: `Dirty Read`-> 3 statement: i read temparory data instead of permanent data
        
#### Q. Scenario  where it is okay to use 'READ UNCOMMITETED'?
- Read uncommitted has the highest performance of all 4 isolations, But it suffers from data inconsitenecy problem called dirty read.

eg:
- Financial app - ❌
- BOOKING - ❌
- Social media - ✅  (performance is important than data)



### 2. READ COMMIT:

INPUT : X = 2000

    1. 2000, X = 2000
    2. store 1000 to A in RAM, not hard disk.  [commit: store data in hard disk] A = 1000*

    - READ COMMITED:
        - It will read data from the Hard disk (permanent data). 
        - X = (X= X+ 500) 2500*
    
    4. rollback:
        A = 2500* is lost (uncommited data will be lost) : RAM
        Now A = 1000*
    
    3. X = 2000 (read data from commited(hard disk))
    5. x= 2500* : returned to temporary - RAM  
    6. x = 2500* : written to RAM
    7. commit x =2500 : written to hard disk 

Output: 2500

`Solution`: Dirty read is solved

`PROBLEM`: 
-  Non repeatable reads:
    - Read commited solves the dirty read, But suffers from another data inconsistency problem : non repeatable read.

Eg. (students):

1. read all the students
2. to all student with psp>=80, add 1000 points
3. read all students
4. update is reviewed to true for all students


- Now, we see new row is added and upadted witout the reviewed, and no points assigned.
- this leads to repeatable read.


### 3. REPEATABLE READ = Default:
