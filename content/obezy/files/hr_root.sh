#!/bin/sh
# use bash shell
#
# Written by: Dominique.Jeunot@oracle.com
# For OBE tests purposes only

export ORACLE_SID=ORCL
export ORACLE_HOME=/u01/app/oracle/product/18.1.0/dbhome_1
PATH=$ORACLE_HOME/bin:$PATH; export PATH

mkdir -p /u02/app/oracle/oradata/ORCL/hr_root
mkdir -p /u02/app/oracle/oradata/ORCL/hr_root/operations
mkdir -p /u02/app/oracle/oradata/ORCL/hr_root/sales
cd /home/oracle/labs

$ORACLE_HOME/bin/sqlplus "/ as sysdba" @create_hr_root.sql
$ORACLE_HOME/bin/sqlplus "sys/password@hr_root AS SYSDBA" @create_hr_app.sql
$ORACLE_HOME/bin/sqlplus "sys/password@hr_root AS SYSDBA" @create_operations.sql
$ORACLE_HOME/bin/sqlplus "sys/password@hr_root AS SYSDBA" @create_sales.sql
$ORACLE_HOME/bin/sqlplus "sys/password@hr_root AS SYSDBA" @sync.sql
