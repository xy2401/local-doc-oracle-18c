/********** cleanup.sql - SQL script to clean up the tutorial environment ************/

SET FEEDBACK ON;

/* Connect to database as SYS user */
conn / as sysdba

/* Drop the database user usr_tmp */ 
DROP USER usr_tmp CASCADE;

/* Drop the tablespaces tmp1 and tmp2 along with their data files */
DROP TABLESPACE tmp1 INCLUDING CONTENTS AND DATAFILES;
DROP TABLESPACE tmp2 INCLUDING CONTENTS AND DATAFILES;

SET SERVEROUTPUT ON;

EXEC DBMS_OUTPUT.PUT_LINE(chr(10)||chr(10)||chr(10)||'***** Environment Cleanup Completed *****');

exit;
