set echo on
CONNECT sys/password@operations AS SYSDBA
ALTER PLUGGABLE DATABASE APPLICATION hr_app SYNC;
CONNECT sys/password@sales AS SYSDBA
ALTER PLUGGABLE DATABASE APPLICATION hr_app SYNC;
exit