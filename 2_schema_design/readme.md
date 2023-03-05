## 1 . 👨‍🎨Schema Design:👨‍🎨

### 📥 Business Requirements 📥

#### Create a DB Schema to allocate below requirements.

- There are students
- Each student has name, email and phone number
- Each student is assigned to a batch.
- Every batch has a name, start date and end date
- Students can shift batches
- Each student has a mentor
- Mentor has name, dob and experience
- Batches have lectures. Each lecture has a topic and is taken by an instructor
- Instructor has nameß, dob and experience
- Multiple batches can learn together in the same lecture.

### Keys🔑:
- Primary Keys (PK) -> 1 (how many fields?), Not Null , UNIQUE 
- Unique keys (UK) -> m , NULL, Unique 
- Foriegn Keys (FK) -> m , NULL , Not necessarily Unique

#### How schema design is done 🤠:
1. Identify Entities (nouns) [Tables]
2. Identify non-relationship attributes (Afjectives) [Colums]
3. Identify relationship types & representations


### Q1. Identify the requirement of schema design ? 🙋‍♂️
1. `Entities`: Students, batchs, Mentors, lectures, instructor
2. `Attributes`:
    - Student: names, email, phone.
    - Batches: name, start_date, end_date
    - Mentors: name, dob, experience
    - Instructor: name, dob, experience
    - Lectures: topic 
3. `relationship`:
    - Students are assigned to a batch 
        - Current Batch:
            - (1:1, m:1) => [m:1]
            - current_bId on m side
        - Previous Batch:
            - (1:m, m:1) = [m:m]
            - new table prev-batch-student
    - Student can shift batch 
    - student has mentor (1:1, m: 1) => [m:1]
    - batches have lectures (1:m, 1: m) => [m:m]
        - new table batch-lecture table (bid,lid)
    - lecture is taken by instructor [m:1]
        - new colum on m side and FK on 1 side.
    - Multiple batches can learn together (1:m, 1: m) => [m:m]
        - new table batch-lecture table (bid,lid)

### Q2: Draw a schema diagram ? 🍥

![](/learn_database/schema.png)