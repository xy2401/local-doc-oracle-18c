/********** setup.sql - SQL script to set up the tutorial environment ************/

SET FEEDBACK ON;

/* Create tablespaces tmp1 and tmp2 */
CREATE TABLESPACE tmp1
DATAFILE 'tmp1.dbf'
SIZE 100M;

CREATE TEMPORARY TABLESPACE tmp2 
TEMPFILE 'tmp2.dbf' 
SIZE 100M;

/* Create a database user usr_tmp */
CREATE USER usr_tmp IDENTIFIED BY usr_tmp 
DEFAULT TABLESPACE tmp1 
TEMPORARY TABLESPACE tmp2;

GRANT connect, resource, dba to usr_tmp;

/* connect to database as usr_tmp */
conn usr_tmp/usr_tmp

/* Create a table tbl_tmp */
CREATE TABLE tbl_tmp(id number, value varchar2(200));
ALTER TABLE tbl_tmp NOLOGGING;

/* Insert some data into the tbl_tmp table */
begin
for i in 1..40000 loop
insert /*+ append */ into tbl_tmp values(1,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
end loop;
end;
/
commit;

/* Create an index on the tbl_tmp table */
CREATE INDEX tbl_tmp_indx on tbl_tmp(id);

SET SERVEROUTPUT ON;

EXEC DBMS_OUTPUT.PUT_LINE(chr(10)||chr(10)||chr(10)||'***** Environment Setup Completed *****');
