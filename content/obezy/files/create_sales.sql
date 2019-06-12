set echo on
ALTER SESSION SET db_create_file_dest='/u02/app/oracle/oradata/ORCL/hr_root/sales';
CREATE PLUGGABLE DATABASE sales ADMIN USER admin IDENTIFIED BY password  ROLES=(CONNECT)
    CREATE_FILE_DEST='/u02/app/oracle/oradata/ORCL/hr_root/sales';
alter pluggable database sales open;
exit