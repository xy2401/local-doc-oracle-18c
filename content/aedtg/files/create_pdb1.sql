SET ECHO ON
HOST mkdir -p /u02/app/oracle/oradata/ORCL/pdb1

ALTER PLUGGABLE DATABASE pdb1 CLOSE;
ALTER SESSION SET db_create_file_dest='/u02/app/oracle/oradata/ORCL/pdb1';
DROP PLUGGABLE DATABASE pdb1 INCLUDING DATAFILES;
CREATE PLUGGABLE DATABASE pdb1
    ADMIN USER pdb_admin IDENTIFIED BY password ROLES=(CONNECT)
    CREATE_FILE_DEST='/u02/app/oracle/oradata/ORCL/pdb1';
	
ALTER PLUGGABLE DATABASE pdb1 OPEN;
exit
