set echo on
create user test identified by password;
grant dba to test;
create table test.bigtab (label varchar2(30));
begin
for i in 1..10000 loop
insert into test.bigtab values ('DATA FROM test.bigtab');
commit;
end loop;
end;
/
EXIT