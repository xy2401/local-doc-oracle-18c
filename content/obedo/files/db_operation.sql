/********** db_operation.sql - This SQL script starts a database operation ************/

SET FEEDBACK ON;

/* Start a database operation having the name DBOP_EXAMPLE */
VAR eid NUMBER;
EXEC :eid:= DBMS_SQL_MONITOR.BEGIN_OPERATION('DBOP_EXAMPLE', forced_tracking => 'Y');

/* Delete data */
DECLARE
CURSOR c1 IS
select id, value
from tbl_tmp;
BEGIN 
FOR i IN c1 LOOP
delete from tbl_tmp where id = i.id;
END LOOP;
END;
/
commit;

/* Insert data */
BEGIN 
FOR i in 1..40000 LOOP
insert /*+ append */ into tbl_tmp values(1,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
END LOOP;
END;
/
commit;
	
/* Select data */
select count(*) 
from tbl_tmp a1, tbl_tmp a2
where a1.id=a2.id AND a1.id=1;

/* End the database operation DBOP_EXAMPLE */
EXEC DBMS_SQL_MONITOR.END_OPERATION('DBOP_EXAMPLE',:eid);

SET SERVEROUTPUT ON;

EXEC DBMS_OUTPUT.PUT_LINE(chr(10)||chr(10)||chr(10)||'***** Database Operation Completed *****');
