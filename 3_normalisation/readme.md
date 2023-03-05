## 3 . 🕶Normalisation:🕶

####  Prerequisite:
Run below script command to create databases:

[Run Database Script](../sql_scripts/3_create_database.sql)

### What is Normalisation ?    
    Technique to identify & resolve data redundancies leading to data anamolies.

### Types of Normalisation ?

1. `1st Normal Form`:
    - DB following 1st NF will not have multi-valued columns

    - Problem: When we hasve multiple values in a column row
    - Solution: Create a new table and map it

2. `2nd Normal Form`:
    - Should follow 1st NF
    - All non-primary key column depens entirily on Primary Key of the table.

3. `3RD normal Form`:
    - Should follow 1st & 2nd NF
    - All non primary key columns should directly depends on primary key. There should not be transition relationship


### CRUD Operations:
Run CRUD command from below script:

- [CRUD Command](../sql_scripts/3_CRUD.sql)



