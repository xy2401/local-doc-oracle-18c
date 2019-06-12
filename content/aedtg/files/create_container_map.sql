set echo on
ALTER PLUGGABLE DATABASE HR_root CLOSE IMMEDIATE;
DROP PLUGGABLE DATABASE operations INCLUDING DATAFILES;
DROP PLUGGABLE DATABASE research INCLUDING DATAFILES;
DROP PLUGGABLE DATABASE accounting INCLUDING DATAFILES;
DROP PLUGGABLE DATABASE sales INCLUDING DATAFILES;
DROP PLUGGABLE DATABASE devt INCLUDING DATAFILES;
DROP PLUGGABLE DATABASE test INCLUDING DATAFILES;
DROP PLUGGABLE DATABASE administration INCLUDING DATAFILES;
DROP PLUGGABLE DATABASE HR_root INCLUDING DATAFILES;
ALTER SESSION set db_CREATE_FILE_DEST='/u02/app/oracle/oradata/ORCL/hr_root';
CREATE PLUGGABLE DATABASE hr_root AS APPLICATION CONTAINER
  admin user admin identified BY password
  CREATE_FILE_DEST='/u02/app/oracle/oradata/ORCL/hr_root';
ALTER PLUGGABLE DATABASE hr_root OPEN;

CONNECT sys/password@hr_root AS SYSDBA 
ALTER PLUGGABLE DATABASE application hr_app begin install '1.0';
CREATE USER hr_mgr identified BY password container=all;
GRANT CREATE SESSION, dba TO hr_mgr container=all;

DROP USER scott CASCADE;
CREATE USER scott identified BY password container=all;
GRANT CREATE SESSION, dba TO scott container=all;

CREATE TABLE scott.DEPT SHARING=METADATA
   (DEPTNO NUMBER(2) CONSTRAINT PK_DEPT PRIMARY KEY,
        DNAME VARCHAR2(14) ,
        LOC VARCHAR2(13) ) ;

CREATE TABLE scott.EMP SHARING = METADATA
   (EMPNO NUMBER(4) CONSTRAINT PK_EMP PRIMARY KEY,
        ENAME VARCHAR2(10),
        JOB VARCHAR2(9),
        MGR NUMBER(4),
        HIREDATE DATE,
        SAL NUMBER(7,2),
        COMM NUMBER(7,2),
        DEPTNO NUMBER(2) CONSTRAINT FK_DEPTNO REFERENCES SCOTT.DEPT);

ALTER TABLE scott.dept ENABLE CONTAINER_MAP;
ALTER TABLE scott.emp ENABLE CONTAINER_MAP;

ALTER table scott.dept ENABLE CONTAINERS_DEFAULT;
ALTER table scott.emp ENABLE CONTAINERS_DEFAULT;

ALTER PLUGGABLE DATABASE application hr_app end install '1.0';

ALTER SESSION set db_CREATE_file_dest='/u02/app/oracle/oradata/ORCL/hr_root/sales';

CREATE PLUGGABLE DATABASE SALES admin USER admin identified BY admin
  CREATE_FILE_DEST='/u02/app/oracle/oradata/ORCL/hr_root/sales';
ALTER PLUGGABLE DATABASE sales OPEN;

ALTER SESSION set db_CREATE_file_dest='/u02/app/oracle/oradata/ORCL/hr_root/accounting';
CREATE PLUGGABLE DATABASE ACCOUNTING admin USER admin identified BY admin
  CREATE_FILE_DEST='/u02/app/oracle/oradata/ORCL/hr_root/accounting';
ALTER PLUGGABLE DATABASE accounting OPEN;

ALTER SESSION set db_CREATE_file_dest='/u02/app/oracle/oradata/ORCL/hr_root/research';
CREATE PLUGGABLE DATABASE RESEARCH admin USER admin identified BY admin
  CREATE_FILE_DEST='/u02/app/oracle/oradata/ORCL/hr_root/research' ;
ALTER PLUGGABLE DATABASE research OPEN;


CONNECT sys/password@sales AS SYSDBA
ALTER PLUGGABLE DATABASE application hr_app sync;

CONNECT sys/password@accounting AS SYSDBA
ALTER PLUGGABLE DATABASE application hr_app sync;

CONNECT sys/password@research AS SYSDBA
ALTER PLUGGABLE DATABASE application hr_app sync;

CONNECT scott/password@accounting
INSERT INTO DEPT VALUES (10,'ACCOUNTING','NEW YORK');
INSERT INTO EMP VALUES (7782,'CLARK','MANAGER',7839,TO_date('9-6-1981','dd-mm-yyyy'),2450,NULL,10);
INSERT INTO EMP VALUES (7839,'KING','PRESIDENT',NULL,TO_date('17-11-1981','dd-mm-yyyy'),5000,NULL,10);
INSERT INTO EMP VALUES (7934,'MILLER','CLERK',7782,TO_date('23-1-1982','dd-mm-yyyy'),1300,NULL,10);
commit;

CONNECT scott/password@research
INSERT INTO DEPT VALUES (20,'RESEARCH','DALLAS');
INSERT INTO EMP VALUES (7369,'SMITH','CLERK',7902,TO_date('17-12-1980','dd-mm-yyyy'),800,NULL,20);
INSERT INTO EMP VALUES (7566,'JONES','MANAGER',7839,TO_date('2-4-1981','dd-mm-yyyy'),2975,NULL,20);
INSERT INTO EMP VALUES (7788,'SCOTT','ANALYST',7566,TO_date('13-JUL-87','dd-mm-rr')-85,3000,NULL,20);
INSERT INTO EMP VALUES (7876,'ADAMS','CLERK',7788,TO_date('13-JUL-87', 'dd-mm-rr')-51,1100,NULL,20);
INSERT INTO EMP VALUES (7902,'FORD','ANALYST',7566,TO_date('3-12-1981','dd-mm-yyyy'),3000,NULL,20);
commit;

CONNECT scott/password@sales
INSERT INTO DEPT VALUES (30,'SALES','CHICAGO');
INSERT INTO EMP VALUES (7499,'ALLEN','SALESMAN',7698,TO_date('20-2-1981','dd-mm-yyyy'),1600,300,30);
INSERT INTO EMP VALUES (7521,'WARD','SALESMAN',7698,TO_date('22-2-1981','dd-mm-yyyy'),1250,500,30);
INSERT INTO EMP VALUES (7654,'MARTIN','SALESMAN',7698,TO_date('28-9-1981','dd-mm-yyyy'),1250,1400,30);
INSERT INTO EMP VALUES (7698,'BLAKE','MANAGER',7839,TO_date('1-5-1981','dd-mm-yyyy'),2850,NULL,30);
INSERT INTO EMP VALUES (7844,'TURNER','SALESMAN',7698,TO_date('8-9-1981','dd-mm-yyyy'),1500,0,30);
INSERT INTO EMP VALUES (7900,'JAMES','CLERK',7698,TO_date('3-12-1981','dd-mm-yyyy'),950,NULL,30);
commit;

CONNECT sys/password@hr_root AS SYSDBA
CREATE TABLE scott.maptable 
      (deptno number, name varchar2(30))
      PARTITION BY LIST (deptno)
       ( PARTITION accounting VALUES (10),
         PARTITION research VALUES (20),
         PARTITION sales VALUES (30)); 

ALTER DATABASE SET CONTAINER_MAP = 'scott.maptable';

exit