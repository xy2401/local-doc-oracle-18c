define(
{
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
                {
                    "title":"List of Examples",
                    "href":"loe.html"
                },
                {
                    "title":"List of Figures",
                    "href":"lof.html"
                },
                {
                    "title":"List of Tables",
                    "href":"lot.html"
                },
                {
                    "title":"Title and Copyright Information",
                    "href":"index.html"
                },
                {
                    "title":"Changes in This Release for Oracle Database Upgrade Guide",
                    "href":"release-changes.html#GUID-00BBE71F-39EE-4DE8-B9F1-CF0239C96755",
                    "topics":[
                        {
                            "title":"Changes in Oracle Database 18c",
                            "href":"release-changes.html#GUID-5FFF10E1-F5D7-48B4-B4E1-3724A5A69C88",
                            "topics":[
                                {
                                    "title":"New Features",
                                    "href":"release-changes.html#GUID-5DC36676-E8D2-4510-8BF1-61A9D098271E"
                                },
                                {
                                    "title":"Deprecated Features",
                                    "href":"release-changes.html#GUID-1D7DCBDA-9AE3-44D5-B94D-7F9A9B8B7690"
                                },
                                {
                                    "title":"Desupported Features",
                                    "href":"release-changes.html#GUID-D1D840A3-2E58-4349-A246-1E2406084589"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Preface",
                    "href":"preface.html#GUID-B9A1644F-9FE9-4140-B8C4-78390F87183D",
                    "topics":[
                        {
                            "title":"Audience",
                            "href":"preface.html#GUID-58C58BE9-F36C-4649-AA4B-9C786E0397C6"
                        },
                        {
                            "title":"Documentation Accessibility",
                            "href":"preface.html#GUID-E409CC44-9A8F-4043-82C8-6B95CD939296"
                        },
                        {
                            "title":"Related Documentation",
                            "href":"preface.html#GUID-0BD81AF5-6992-4E19-B322-73567D697B94"
                        },
                        {
                            "title":"Conventions",
                            "href":"preface.html#GUID-E1BC556C-86BA-415E-9C86-3623BC276048"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">1 </span> Introduction to Upgrading Oracle Database",
                    "href":"intro-to-upgrading-oracle-database.html#GUID-FA024F34-A61A-4C4B-AA60-C123A9191A16",
                    "topics":[
                        {
                            "title":"Overview of Oracle Database Upgrade Tools and Processes",
                            "href":"overview-oracle-db-upgrade-tools-processes.html#GUID-99E10023-B2E5-4B35-BD01-E21D5B912D50",
                            "topics":[
                                {
                                    "title":"Definition of Terms Upgrading and Migrating",
                                    "href":"definition-of-terms-upgrading-and-migrating.html#GUID-D949E541-4AB1-43E0-BFC3-B7493C3E46D8"
                                },
                                {
                                    "title":"Upgrade and Data Migration Methods and Processes",
                                    "href":"upgrade-and-data-migration-methods-and-processes.html#GUID-93250F01-DB85-4CA2-9A10-5B5FA5E4B924"
                                },
                                {
                                    "title":"Oracle Database Releases That Support Direct Upgrade",
                                    "href":"oracle-database-releases-that-support-direct-upgrade.html#GUID-7AA90913-D8AB-4EBA-944F-31FA01D6BE5D"
                                },
                                {
                                    "title":"Where to Find the Latest Information About Upgrading Oracle Database",
                                    "href":"find-latest-information-upgrading-oracle-database.html#GUID-DFC94F4C-01A9-43BD-9F70-1EE6D472A562"
                                }
                            ]
                        },
                        {
                            "title":"Major Steps in the Upgrade Process for Oracle Database",
                            "href":"major-steps-upgrade-process-oracle-database.html#GUID-EE26CF0A-1B77-43D7-A613-9C6D0BF42DBB"
                        },
                        {
                            "title":"Compatibility and Interoperability between Oracle Database Releases",
                            "href":"compatibility-interoperability-between-database-releases.html#GUID-CC06CC01-77F5-456E-AA43-E4D80E40F26C",
                            "topics":[
                                {
                                    "title":"About Oracle Database Release Numbers",
                                    "href":"oracle-database-release-numbers.html#GUID-1E2F3945-C0EE-4EB2-A933-8D1862D8ECE2"
                                },
                                {
                                    "title":"Convention for Referring to Release Numbers in Oracle Database Upgrade Guide",
                                    "href":"conventions-release-numbers-oracle.html#GUID-74D2EC82-21F6-48C2-8C60-D67C2396B215"
                                },
                                {
                                    "title":"What Is Oracle Database Compatibility?",
                                    "href":"what-is-oracle-database-compatibility.html#GUID-7FCE8614-8163-4393-AE66-2ADD1F73934F",
                                    "topics":[
                                        {
                                            "title":"The COMPATIBLE Initialization Parameter in Oracle Database",
                                            "href":"what-is-oracle-database-compatibility.html#GUID-A2E90F08-BC9F-4688-A9D0-4A948DD3F7A9"
                                        },
                                        {
                                            "title":"Values for the COMPATIBLE Initialization Parameter in Oracle Database",
                                            "href":"what-is-oracle-database-compatibility.html#GUID-1146B7A7-81EE-4F90-8A0A-8440A6618CD9"
                                        },
                                        {
                                            "title":"About Downgrading and Compatibility for Upgrading Oracle Database",
                                            "href":"what-is-oracle-database-compatibility.html#GUID-6C3281EB-742B-4E4C-BB37-F916FAEF50AC"
                                        },
                                        {
                                            "title":"How the COMPATIBLE Initialization Parameter Operates in Oracle Database",
                                            "href":"what-is-oracle-database-compatibility.html#GUID-551DEA35-0A31-4D1C-A367-AFAF8906AEC8"
                                        },
                                        {
                                            "title":"Checking the Compatibility Level of Oracle Database",
                                            "href":"what-is-oracle-database-compatibility.html#GUID-5715C0EC-0229-4AE0-8433-DFE4A4297C4A"
                                        },
                                        {
                                            "title":"When to Set the COMPATIBLE Initialization Parameter in Oracle Database",
                                            "href":"what-is-oracle-database-compatibility.html#GUID-6E27D95D-97D7-4C87-A270-3E300EF55F3A"
                                        }
                                    ]
                                },
                                {
                                    "title":"What Is Interoperability for Oracle Database Upgrades?",
                                    "href":"what-is-interoperability-for-oracle-database-upgrades.html#GUID-96FA7FF6-B699-4A02-AC42-601AC245C66B"
                                },
                                {
                                    "title":"About Invalid Schema Objects and Database Upgrades",
                                    "href":"invalid-schema-objects-database-upgrades.html#GUID-306CB6B3-F7FB-42C1-931F-4C8B22912AA8"
                                },
                                {
                                    "title":"About Upgrading Oracle OLAP Data Security Policies",
                                    "href":"upgrading-oracle-olap-data-security-policies.html#GUID-374632C8-717C-4055-820B-AE260849550D"
                                }
                            ]
                        },
                        {
                            "title":"About Running Multiple Oracle Releases",
                            "href":"running-multiple-oracle-database-releases.html#GUID-EDF33DC1-BB2C-4E7E-9DFA-B00BC46BEF7F",
                            "topics":[
                                {
                                    "title":"Databases in Multiple Oracle Homes on Separate Computers",
                                    "href":"running-multiple-oracle-database-releases.html#GUID-BE904DD1-3689-4145-82F7-AF3F9D4BA3CD"
                                },
                                {
                                    "title":"Databases in Multiple Oracle Homes on the Same Computer",
                                    "href":"running-multiple-oracle-database-releases.html#GUID-9EBD4F93-C29E-4728-B4A3-6249DE0CF749"
                                },
                                {
                                    "title":"About the Optimal Flexible Architecture Standard",
                                    "href":"running-multiple-oracle-database-releases.html#GUID-6619CDB7-9667-426E-8471-5A996707D093"
                                },
                                {
                                    "title":"About Multiple Oracle Homes Support",
                                    "href":"running-multiple-oracle-database-releases.html#GUID-CFB6CD80-EFE5-4A14-95F4-08291DB594FD"
                                }
                            ]
                        },
                        {
                            "title":"About Converting Databases During Upgrades",
                            "href":"converting-databases-upgrades.html#GUID-C7B6FF47-0718-4597-9550-63E3C7E0A024",
                            "topics":[
                                {
                                    "title":"Overview of Converting Databases During Upgrades",
                                    "href":"overview-conveting-databases-during-upgrade.html#GUID-595CB101-7846-4609-B260-FC030E5631FF"
                                },
                                {
                                    "title":"About 32-bit Oracle Databases to 64-bit Oracle Database Conversions",
                                    "href":"32-bit-64-bit-oracle-database-conversions.html#GUID-10111AF6-9D00-428F-AE92-C71B42BA64FA"
                                },
                                {
                                    "title":"About Upgrading Using Standby Databases",
                                    "href":"upgrading-using-standby-databases.html#GUID-852A592A-0589-456B-9DD3-5B662EC2EE14"
                                },
                                {
                                    "title":"Using Oracle GoldenGate for Online Database Upgrades",
                                    "href":"using-oracle.goldengate-for-online-database-upgrades.html#GUID-520782D2-775A-45D9-89CC-677270AB120C",
                                    "topics":[
                                        {
                                            "title":"About Oracle GoldenGate and Online Database Upgrade",
                                            "href":"using-oracle.goldengate-for-online-database-upgrades.html#GUID-FCC03919-1395-4EBC-B1EE-9BBB852E1620"
                                        },
                                        {
                                            "title":"Overview of Steps for Upgrading Oracle Database Using Oracle GoldenGate",
                                            "href":"using-oracle.goldengate-for-online-database-upgrades.html#GUID-8E029631-8265-497C-983B-B8A4ACD47B98"
                                        }
                                    ]
                                },
                                {
                                    "title":"Migrating From Standard Edition to Enterprise Edition of Oracle Database",
                                    "href":"migrating-from-standard-to-enterprise--database.html#GUID-294262A1-9E53-4C76-8FFA-086BD6CC4EE1"
                                },
                                {
                                    "title":"Migrating from Enterprise Edition to Standard Edition of Oracle Database",
                                    "href":"migrating-from-enterprise-to-standard-database.html#GUID-FD2DB65B-0E54-4ECE-8DF3-8E8F12FBD005"
                                },
                                {
                                    "title":"Migrating from Oracle Database Express Edition (Oracle Database XE) to Oracle Database",
                                    "href":"migrating-from-express-to-standard-database.html#GUID-8DE9745C-EAFB-4C08-9B79-379E6983F9F8"
                                }
                            ]
                        },
                        {
                            "title":"About Upgrading Platforms for a New Oracle Database Release",
                            "href":"upgrading-platforms-new-oracle-database-release.html#GUID-F38989CF-4649-46BE-894E-27FBBA0335AD",
                            "topics":[
                                {
                                    "title":"About Upgrading Your Operating System",
                                    "href":"upgrading-platforms-new-oracle-database-release.html#GUID-5DAF7BF8-F53B-4938-8AF1-2578F1660C87"
                                },
                                {
                                    "title":"Options for Transporting Data to a Different Operating System",
                                    "href":"upgrading-platforms-new-oracle-database-release.html#GUID-8D33212E-DB46-43B6-A0F7-612A23C91DAC"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">2 </span> Preparing to Upgrade Oracle Database",
                    "href":"tasks-prepare-upgrade-oracle-database.html#GUID-733D2563-A42D-4366-9FCD-DABD25D0E2DF",
                    "topics":[
                        {
                            "title":"About Read-Only Oracle Homes",
                            "href":"understanding-read-only-oracle-homes.html#GUID-D848002A-DBAD-48FA-8467-E849630B8E42"
                        },
                        {
                            "title":"About Configuring an Oracle Home in Read-Only Mode",
                            "href":"tasks-prepare-upgrade-oracle-database.html#GUID-DD6B0856-AB17-47E9-BDC3-1CD1EBD169F6"
                        },
                        {
                            "title":"About Image-Based Oracle Database Installation",
                            "href":"image-based-oracle-database-installations.html#GUID-0315AA15-1C03-4E96-B801-3A8E5F5D4B39"
                        },
                        {
                            "title":"Tasks to Prepare for Oracle Database Upgrades",
                            "href":"tasks-to-prepare-for-oracle-database-upgrades.html#GUID-3C319260-B5CD-4C50-B606-36D060FDF0BE",
                            "topics":[
                                {
                                    "title":"Become Familiar with New Oracle Database Features",
                                    "href":"become-familiar-with-new-database-features.html#GUID-46BF5A44-69EC-4952-AD0A-81F732EA9181"
                                },
                                {
                                    "title":"Choose an Upgrade Method for Oracle Database",
                                    "href":"choose-an-upgrade-method-for-oracle-database.html#GUID-9774D863-E62C-4B49-9696-B5D244EF2826",
                                    "topics":[
                                        {
                                            "title":"The Graphical User Interface Method for Upgrading Oracle Database",
                                            "href":"choose-an-upgrade-method-for-oracle-database.html#GUID-814C68FB-7802-4B25-957E-6253757ACC7C"
                                        },
                                        {
                                            "title":"The Manual, Command-Line Method for Upgrading Oracle Database",
                                            "href":"choose-an-upgrade-method-for-oracle-database.html#GUID-3FBD30C3-4BEC-48D6-895A-B7C12C4119AE"
                                        },
                                        {
                                            "title":"The Export/Import Method for Migrating Data When Upgrading Oracle Database",
                                            "href":"choose-an-upgrade-method-for-oracle-database.html#GUID-C42206CA-0BCC-424A-A714-FBBE1B0A7BDE",
                                            "topics":[
                                                {
                                                    "title":"The Effects of Export/Import on Upgraded Oracle Databases",
                                                    "href":"choose-an-upgrade-method-for-oracle-database.html#GUID-D5763DEF-413A-4A80-8E62-BEE922C24369"
                                                },
                                                {
                                                    "title":"Export/Import Benefits for Migrating Data for Oracle Database",
                                                    "href":"choose-an-upgrade-method-for-oracle-database.html#GUID-472735BB-D4F5-4C26-9181-76F53593351B"
                                                },
                                                {
                                                    "title":"Time Requirements for Migrating Data and Upgrading with Export/Import",
                                                    "href":"choose-an-upgrade-method-for-oracle-database.html#GUID-13B8B2F7-A44D-40C5-9943-05EDC565BC39"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"Choose a New Location for Oracle Home when Upgrading",
                                    "href":"choose-a-new-location-for-oracle-home-when-upgrading.html#GUID-AFA0564D-F5B5-40CA-988C-011AFCE2084B"
                                },
                                {
                                    "title":"Develop a Test Plan for Upgrading Oracle Database",
                                    "href":"develop-a-test-plan-for-upgrading-database.html#GUID-1CE27BA9-26B0-491D-89EB-A01F06CEC9D2",
                                    "topics":[
                                        {
                                            "title":"Upgrade Testing",
                                            "href":"develop-a-test-plan-for-upgrading-database.html#GUID-B40D9C85-1A2A-40B7-8931-53F49ABEF96B"
                                        },
                                        {
                                            "title":"Minimal Testing",
                                            "href":"develop-a-test-plan-for-upgrading-database.html#GUID-9DAE0B10-301D-493D-A11E-1AD5B52F3A78"
                                        },
                                        {
                                            "title":"Functional Testing After Upgrades",
                                            "href":"develop-a-test-plan-for-upgrading-database.html#GUID-A4750E77-F450-4181-8B0E-F9C5DF0E4A04"
                                        },
                                        {
                                            "title":"High Availability Testing",
                                            "href":"develop-a-test-plan-for-upgrading-database.html#GUID-E43E7AA9-EEDC-458C-9D79-300AA4437271"
                                        },
                                        {
                                            "title":"Integration Testing to Ensure Applications are Compatible",
                                            "href":"develop-a-test-plan-for-upgrading-database.html#GUID-6E849D5D-1C9F-40AF-9046-2CD8C1A30F6E"
                                        },
                                        {
                                            "title":"Performance Testing an Upgraded Oracle Database",
                                            "href":"develop-a-test-plan-for-upgrading-database.html#GUID-CD44BC42-14E4-4694-A652-A8936953801C",
                                            "topics":[
                                                {
                                                    "title":"Database Replay and Performance Testing",
                                                    "href":"develop-a-test-plan-for-upgrading-database.html#GUID-F8B12F83-94F9-4975-9B8A-E6CBD8E1BD53"
                                                },
                                                {
                                                    "title":"SQL Performance Analyzer",
                                                    "href":"develop-a-test-plan-for-upgrading-database.html#GUID-538383F1-F232-49C3-B946-5942EBD76A21"
                                                },
                                                {
                                                    "title":"SQL Plan Management",
                                                    "href":"develop-a-test-plan-for-upgrading-database.html#GUID-D36FDACE-FB0C-4732-B905-67ED1337DE7C"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"Volume and Load Stress Testing for Oracle Database Upgrades",
                                            "href":"develop-a-test-plan-for-upgrading-database.html#GUID-E7CE7CDF-4799-472A-9599-6F38677F5A6B"
                                        },
                                        {
                                            "title":"Test Plan Guidelines for Oracle Database Upgrade Planning",
                                            "href":"develop-a-test-plan-for-upgrading-database.html#GUID-00E55084-859C-47BB-A879-F037B331D2D2"
                                        }
                                    ]
                                },
                                {
                                    "title":"Prepare a Backup Strategy Before Upgrading Oracle Database",
                                    "href":"prepare-a-backup-strategy-before-upgrading-oracle-database.html#GUID-671004F2-89AC-464D-A1E2-B4ED418D23C0"
                                }
                            ]
                        },
                        {
                            "title":"Pre-Upgrade Information Tool Checklist",
                            "href":"preupgrade-information-tool-checklist.html#GUID-2DB48303-DC1E-41CD-831D-864D76BD8061"
                        },
                        {
                            "title":"Installing the New Oracle Database Software for Single Instance",
                            "href":"installing-software-only-oracle-database-single-instance.html#GUID-9FFE2643-6529-4AB2-A92F-082361739A81"
                        },
                        {
                            "title":"Installing the New Oracle Database Software for Oracle RAC",
                            "href":"installing-new-oracle-database-software.html#GUID-8C58EB98-BCB6-43DB-A3F4-31F6D17F7266"
                        },
                        {
                            "title":"Database Preparation Tasks to Complete Before Starting Oracle Database Upgrades",
                            "href":"database-preparation-tasks-to-complete-before-upgrades.html#GUID-58C1A4B9-32F4-44E5-B82B-5D0EC78A6AE2",
                            "topics":[
                                {
                                    "title":"Patch Set Updates and Requirements for Upgrading Oracle Database",
                                    "href":"database-preparation-tasks-to-complete-before-upgrades.html#GUID-46F09541-C36A-4790-B3D3-E0E336A7BBC3"
                                },
                                {
                                    "title":"Copying Transparent Encryption Oracle Wallets",
                                    "href":"database-preparation-tasks-to-complete-before-upgrades.html#GUID-6C0D6F38-2ADE-4E60-8603-A7DB1F218B8B"
                                },
                                {
                                    "title":"Recommendations for Oracle Net Services When Upgrading Oracle Database",
                                    "href":"database-preparation-tasks-to-complete-before-upgrades.html#GUID-6732E4F8-93B5-4257-A8FC-5257F28E44E3"
                                },
                                {
                                    "title":"Understanding Password Case Sensitivity and Upgrades",
                                    "href":"database-preparation-tasks-to-complete-before-upgrades.html#GUID-6428A98A-6621-4E49-89E5-FAFD51F04B60"
                                },
                                {
                                    "title":"Checking for Accounts Using Case-Insensitive Password Version",
                                    "href":"database-preparation-tasks-to-complete-before-upgrades.html#GUID-ABD2D296-EFB9-49CA-94C5-FB1068AF19DE"
                                },
                                {
                                    "title":"Running Upgrades with Read-Only Tablespaces",
                                    "href":"database-preparation-tasks-to-complete-before-upgrades.html#GUID-E10096D0-36E3-41AF-9381-D74089FC6E17"
                                }
                            ]
                        },
                        {
                            "title":"Preparing for Database Rolling Upgrades Using Oracle Data Guard",
                            "href":"prepare-dbua-oracle-data-guard-rolling-upgrades.html#GUID-4C56C03E-671E-4518-830A-81B1F5EAFF76"
                        },
                        {
                            "title":"Preparing the New Oracle Home for Upgrading",
                            "href":"preparing-new-oracle-home-for-upgrade.html#GUID-E9112AB3-2230-495C-8BB7-9998A6BF903E"
                        },
                        {
                            "title":"Prerequisites for Preparing Oracle Home on Windows",
                            "href":"prerequisites-for-preparing-oracle-home-on-windows.html#GUID-78AA584B-F911-4E31-B9D9-CFA0B67DD960"
                        },
                        {
                            "title":"Using the Pre-Upgrade Information Tool for Oracle Database",
                            "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-C0219AF1-AD43-4097-B358-E53E48958647",
                            "topics":[
                                {
                                    "title":"About the Pre-Upgrade Information Tool",
                                    "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-C4B1F17F-D133-4A6A-B5D8-8244604C2B74"
                                },
                                {
                                    "title":"Preupgrade Scripts Generated By the Pre-Upgrade Information Tool",
                                    "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-B6EDBCBE-CD3C-464D-9B7B-97DE8A655AE4"
                                },
                                {
                                    "title":"Postupgrade Scripts Generated By the Pre-Upgrade Information Tool",
                                    "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-ADF44356-F67C-4E95-912B-9DD13FF26888"
                                },
                                {
                                    "title":"Setting Up Environment Variables for the Pre-Upgrade Information Tool",
                                    "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-DCB43F8E-87F1-4F5D-A6EB-388755BAC952"
                                },
                                {
                                    "title":"Pre-Upgrade Information Tool (preupgrade.jar) Command",
                                    "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-C4941221-8DC4-4DF8-A773-9F8B3FECF7D0"
                                },
                                {
                                    "title":"Output of the Pre-Upgrade Information Tool",
                                    "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-AEA50E7D-48B8-4EB0-A416-130C2A804F4A"
                                },
                                {
                                    "title":"Pre-Upgrade Information Tool Output Example",
                                    "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-0C496815-1826-4E28-8437-36FA549000F9"
                                },
                                {
                                    "title":"Pre-Upgrade Information Tool Warnings and Recommendations for Oracle Database",
                                    "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-DC0F9DF2-4001-48E5-AC18-4F2FA10B869E",
                                    "topics":[
                                        {
                                            "title":"Updating Access Control Lists and Network Utility Packages",
                                            "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-C2D486E3-BA9E-408B-8E0B-B3717932013F"
                                        },
                                        {
                                            "title":"Evaluate Dependencies and Add ACLs for Network Utility Packages",
                                            "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-3A3CF5F6-C123-4AAE-AADA-B4280C6EC410"
                                        },
                                        {
                                            "title":"About Database Links with Passwords from Earlier Oracle Database Releases",
                                            "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-BA1C2912-3F72-4544-BEF4-F626C026567B"
                                        },
                                        {
                                            "title":"About Oracle Database Warnings for TIMESTAMP WITH TIME ZONE Data Type",
                                            "href":"using-preupgrade-information-tool-for-oracle-database.html#GUID-88B53A2B-23C3-46F4-90A1-9AE5FD836BCE"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"Testing the Upgrade Process for Oracle Database",
                            "href":"testing-upgraded-production-oracle-database.html#GUID-DA291D0C-5680-48D3-90A8-CF4217577A6B",
                            "topics":[
                                {
                                    "title":"Example of Testing Upgrades Using Priority List Emulation",
                                    "href":"testing-upgraded-production-oracle-database.html#GUID-1613B800-89C3-4FA9-898B-19B602B2F907"
                                },
                                {
                                    "title":"Upgrade Oracle Call Interface (OCI) and Precompiler Applications",
                                    "href":"testing-upgraded-production-oracle-database.html#GUID-DCDFE417-1D74-4154-B565-5E34E616E1BA"
                                }
                            ]
                        },
                        {
                            "title":"Requirements for Upgrading Databases That Use Oracle Label Security and Oracle Database Vault",
                            "href":"requirements-upgrading-databases-that-use-oracle-label-security-and-oracle-database-vault.html#GUID-8EEEB9FC-CEFC-451C-8EC7-4B6D03418B96",
                            "topics":[
                                {
                                    "title":"Audit Table Preupgrade and Archive Requirements",
                                    "href":"requirements-upgrading-databases-that-use-oracle-label-security-and-oracle-database-vault.html#GUID-843920D9-DEC0-4C93-8AA3-30016EA2FB12"
                                },
                                {
                                    "title":"Oracle Database Vault and Upgrades of Oracle Database Release 11.2",
                                    "href":"requirements-upgrading-databases-that-use-oracle-label-security-and-oracle-database-vault.html#GUID-55666B56-2F98-439B-93B7-836F827370BC"
                                },
                                {
                                    "title":"Granting the DV_PATCH_ADMIN Role to SYS for Oracle Database Vault",
                                    "href":"requirements-upgrading-databases-that-use-oracle-label-security-and-oracle-database-vault.html#GUID-3572726F-3408-4AAD-A46B-710092A59E3F"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">3 </span> Upgrading Oracle Database",
                    "href":"upgrading-oracle-database.html#GUID-CC88F262-3370-4FFA-8604-EDA9F20F56D9",
                    "topics":[
                        {
                            "title":"Backing Up Oracle Database for Upgrading",
                            "href":"backing-up-oracle-db-for-upgrading.html#GUID-E3BF972C-26EA-436D-B09B-716B3DB90A23"
                        },
                        {
                            "title":"Upgrading with Parallel Upgrade Utility (catctl.pl and dbupgrade Shell Command)",
                            "href":"upgrading-parallel-upgrade-utility-catctl-pl.html#GUID-9AA7ADC1-E2F7-4C26-9E91-A583D1D694C5",
                            "topics":[
                                {
                                    "title":"About the Parallel Upgrade Utility for Oracle Database (CATCTL.PL and DBUPGRADE)",
                                    "href":"upgrading-parallel-upgrade-utility-catctl-pl.html#GUID-9E7E83CC-6A4B-4645-AEA8-AFE16337339E"
                                },
                                {
                                    "title":"General Steps for Running the Parallel Upgrade Utility",
                                    "href":"upgrading-parallel-upgrade-utility-catctl-pl.html#GUID-03C019A1-EC6F-41A3-8775-F6908194B18F"
                                },
                                {
                                    "title":"Parallel Upgrade Utility (catctl.pl) Parameters",
                                    "href":"upgrading-parallel-upgrade-utility-catctl-pl.html#GUID-C667B51C-058F-48B6-86FE-12E9D82FDDBD"
                                },
                                {
                                    "title":"Example of Using the Parallel Upgrade Utility",
                                    "href":"upgrading-parallel-upgrade-utility-catctl-pl.html#GUID-02F0D46C-22E2-4D64-99EE-B5FF7F0A8598"
                                }
                            ]
                        },
                        {
                            "title":"Upgrading with Oracle Database Upgrade Assistant (DBUA)",
                            "href":"upgrading-oracle-database-upgrade-assistant-dbua.html#GUID-BBF591A5-EB02-405A-9F99-572429838C73",
                            "topics":[
                                {
                                    "title":"Recommendations for Using DBUA",
                                    "href":"upgrading-oracle-database-upgrade-assistant-dbua.html#GUID-04161A85-6A67-4404-B7A7-69A3713C5F99"
                                },
                                {
                                    "title":"About Stopping DBUA When Upgrading",
                                    "href":"upgrading-oracle-database-upgrade-assistant-dbua.html#GUID-A10C2BBB-F884-4BD3-A8EA-3A8E48029E2E"
                                },
                                {
                                    "title":"How DBUA Processes the Upgrade for Oracle Database",
                                    "href":"upgrading-oracle-database-upgrade-assistant-dbua.html#GUID-0F7FD8A1-4615-46EA-8083-E565CB450EAA"
                                },
                                {
                                    "title":"Upgrade Scripts Started by DBUA",
                                    "href":"upgrading-oracle-database-upgrade-assistant-dbua.html#GUID-8BDDF859-1638-45AC-824D-78FC8154847C"
                                },
                                {
                                    "title":"Using DBUA to Upgrade the Database on Linux, Unix, and Windows Systems",
                                    "href":"upgrading-oracle-database-upgrade-assistant-dbua.html#GUID-307DACD9-ECEE-4079-B767-B22620B99900"
                                },
                                {
                                    "title":"Moving a Database from an Existing Oracle Home",
                                    "href":"upgrading-oracle-database-upgrade-assistant-dbua.html#GUID-F929338D-48EE-434F-A5F9-A9E7CD61B17F"
                                },
                                {
                                    "title":"Using DBUA in Silent Mode to Upgrade Oracle Database",
                                    "href":"upgrading-oracle-database-upgrade-assistant-dbua.html#GUID-25EB7D5A-284E-4A39-85E2-640DE452AC57",
                                    "topics":[
                                        {
                                            "title":"Running DBUA in Silent Mode",
                                            "href":"upgrading-oracle-database-upgrade-assistant-dbua.html#GUID-29C7651A-28FD-4AA3-ACE4-D15708A9882B"
                                        },
                                        {
                                            "title":"DBUA Command-Line Syntax for Silent Mode",
                                            "href":"upgrading-oracle-database-upgrade-assistant-dbua.html#GUID-EF6ABCBB-DEB4-4061-8106-0024F8BFB3F1"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"Upgrade Scenarios for Non-CDB Oracle Databases",
                            "href":"upgrade-scenarios-non-cdb-oracle-databases.html#GUID-B9505420-7D07-4260-BC2E-D677180365A7",
                            "topics":[
                                {
                                    "title":"About Upgrading Non-CDB Oracle Databases",
                                    "href":"upgrade-scenarios-non-cdb-oracle-databases.html#GUID-B3C0441E-A1F3-47D9-925C-6BFC07B13A54"
                                },
                                {
                                    "title":"Manually Upgrading Non-CDB Architecture Oracle Databases",
                                    "href":"upgrade-scenarios-non-cdb-oracle-databases.html#GUID-D6F6D375-B021-47E0-B0C8-B2C0B191AC0D"
                                },
                                {
                                    "title":"Upgrading a Non-CDB Oracle Database To a PDB on a CDB",
                                    "href":"upgrade-scenarios-non-cdb-oracle-databases.html#GUID-2E5D091C-8578-49EE-92BF-002D8A28BBE7"
                                },
                                {
                                    "title":"Upgrading a Non-CDB Oracle Database Using Rapid Home Provisioning",
                                    "href":"upgrade-scenarios-non-cdb-oracle-databases.html#GUID-9456CC2B-46D0-4083-93F3-3B20A00D5A79"
                                },
                                {
                                    "title":"Variables for Using ORADIM When Upgrading Oracle Database on Windows",
                                    "href":"upgrade-scenarios-non-cdb-oracle-databases.html#GUID-9CA1706D-77B5-441A-A62C-0737C3C38214"
                                }
                            ]
                        },
                        {
                            "title":"Example of Manual Upgrade of Windows Non-CDB Oracle Database 11.2.0.3",
                            "href":"example-manual-upgrade-windows-non-cdb-11203-to-122.html#GUID-30F3DC9C-141A-47DC-9B83-6D0C395E565C",
                            "topics":[
                                {
                                    "title":"Preparing to Upgrade Windows Non-CDB Using Command-Line Utilities",
                                    "href":"example-manual-upgrade-windows-non-cdb-11203-to-122.html#GUID-6DCC7A57-7F82-467B-9B39-6568CEDF04BC"
                                },
                                {
                                    "title":"Manually Upgrading Windows Non-CDB Using Command-Line Utilities",
                                    "href":"example-manual-upgrade-windows-non-cdb-11203-to-122.html#GUID-BCD5E0B2-B821-435E-93E8-B033A65DA263"
                                },
                                {
                                    "title":"Running Postupgrade Fixup Scripts After Upgrading a Non-CDB Database",
                                    "href":"example-manual-upgrade-windows-non-cdb-11203-to-122.html#GUID-B5A840F4-912B-4DAD-82CA-94522140DB14"
                                }
                            ]
                        },
                        {
                            "title":"Manual Upgrade Scenarios for Multitenant Architecture Oracle Databases",
                            "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-8231CE50-ABEC-4BA3-A4AC-D461EB791ACD",
                            "topics":[
                                {
                                    "title":"About Oracle Multitenant Oracle Database Upgrades",
                                    "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-2424F203-D586-459E-9BC5-5332800A7D2F"
                                },
                                {
                                    "title":"Coordinate Upgrades of Proxy PDBs with Multitenant Upgrades",
                                    "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-553F6F33-84AD-4601-868C-2860EC6D69E9"
                                },
                                {
                                    "title":"Manually Upgrading a Multitenant Container Oracle Database (CDB)",
                                    "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-7E127507-D2F5-4771-A8A9-BAF6E553831B"
                                },
                                {
                                    "title":"About Upgrading PDBs Using the Parallel Upgrade Utility with Priority Lists",
                                    "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-6471F9F4-5151-4FA3-B5EC-B5AEBD99B0AA"
                                },
                                {
                                    "title":"About PDB Upgrades Using Priority Lists, Inclusion Lists, and Exclusion Lists",
                                    "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-55A00056-EFB3-4F81-8E28-3B8C9553B68F"
                                },
                                {
                                    "title":"Upgrading Multitenant Architecture In Parallel",
                                    "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-4CA89342-971B-447C-A643-9638DE4EB121",
                                    "topics":[
                                        {
                                            "title":"About Upgrading Pluggable Databases (PDBs) In Parallel",
                                            "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-8775B0AB-CBED-4173-9B76-4F6E34841EFB"
                                        },
                                        {
                                            "title":"Upgrading Multitenant Container Databases In Parallel",
                                            "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-5C043DD3-309A-4C8A-B500-1CAFC2CAB875"
                                        }
                                    ]
                                },
                                {
                                    "title":"Upgrading Multitenant Architecture Sequentially Using Unplug-Plug",
                                    "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-8F9AAFA1-690D-4F70-8448-E66D765AF136",
                                    "topics":[
                                        {
                                            "title":"About Upgrading Pluggable Databases (PDBs) Sequentially",
                                            "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-4CB1CB0C-E893-41F6-A1A5-2E2BE1A706AF"
                                        },
                                        {
                                            "title":"Unplugging the Earlier Release PDB from the Earlier Release CDB",
                                            "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-F1F89935-A2F1-4C3F-8138-FF34B3F01168"
                                        },
                                        {
                                            "title":"Plugging in the Earlier Release PDB to the Later Release CDB",
                                            "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-E188F65A-8AE8-494F-80BD-7060AE02769E"
                                        },
                                        {
                                            "title":"Upgrading the Earlier Release PDB to the Later Release",
                                            "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-99657846-6859-43BF-A514-0C8A7786734D"
                                        },
                                        {
                                            "title":"Use Inclusion or Exclusion Lists for PDB Upgrades",
                                            "href":"manual-upgrade-scenarios-multitenant-architecture-oracle-databases.html#GUID-466B8807-EE9F-477E-BE59-600044BA882B"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"Improvements to Data Dictionary Upgrade and Upgrade Status Displays",
                            "href":"improvements-data-dictionary-upgrade-and-upgrade-status-displays.html#GUID-62179D93-837E-41E2-A8D9-D8B697AC6902",
                            "topics":[
                                {
                                    "title":"Upgrading the Data Dictionary in Parallel with Parallel Upgrade Utility",
                                    "href":"improvements-data-dictionary-upgrade-and-upgrade-status-displays.html#GUID-B59A686C-BF95-41EE-B92E-D6F3B31A0F13"
                                },
                                {
                                    "title":"Change to Upgrade Status Setting",
                                    "href":"improvements-data-dictionary-upgrade-and-upgrade-status-displays.html#GUID-34429081-C0F4-4C8F-AB66-6A0D1A02977A"
                                },
                                {
                                    "title":"Change to Status After Running the Re-compilation utlrp.sql Script",
                                    "href":"improvements-data-dictionary-upgrade-and-upgrade-status-displays.html#GUID-B82C8A96-9A9B-4465-A509-6D4A2702C571"
                                }
                            ]
                        },
                        {
                            "title":"About Dbupgrade Scripts and catupgrd.sql in Earlier Releases of Oracle Database",
                            "href":"dbupgrade-scripts-catupgrd.sql-earlier-release.html#GUID-383CE05F-08E6-4922-AB37-5EB6F748712A"
                        },
                        {
                            "title":"About Transporting and Upgrading a Database (Full Transportable Export/Import)",
                            "href":"transporting-upgrading-database-full-transportable-export-import.html#GUID-E5765990-0A20-4AAC-8AFC-1930B929A172"
                        },
                        {
                            "title":"Troubleshooting the Upgrade for Oracle Database",
                            "href":"troubleshooting-oracle-database-upgrade.html#GUID-474BFAA2-0CD6-4672-8A7A-BF640F4FBFB2",
                            "topics":[
                                {
                                    "title":"About Starting Oracle Database in Upgrade Mode",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-21A033B9-5994-4FFC-8D30-D0ABCBB1AC19"
                                },
                                {
                                    "title":"Running DBUA with Different ORACLE_HOME Owner",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-6444C924-B085-4941-897D-F8611F9C7625"
                                },
                                {
                                    "title":"Invalid Object Warnings and DBA Registry Errors",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-FC90995E-8E54-4E8B-B889-A497866CCA2A"
                                },
                                {
                                    "title":"Invalid Objects and Premature Use of Postupgrade Tool",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-A6C4B02E-EF6D-449D-82E8-732AF59A7F8B"
                                },
                                {
                                    "title":"Resolving Oracle Database Upgrade Script Termination Errors",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-785B0B45-97D9-49FD-8312-2562210D4AF8"
                                },
                                {
                                    "title":"Troubleshooting Causes of Resource Limits Errors while Upgrading Oracle Database",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-AD67C5DA-7481-454D-B259-E362839451AB"
                                },
                                {
                                    "title":"Resolving SQL*Plus Edition Session Startup Error for Oracle Database",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-5C6DA3B0-396D-4532-A735-9A27C1AF28FE"
                                },
                                {
                                    "title":"Error ORA-00020 Maximum Number of Processes Exceeded When Running utlrp.sql",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-A58002D5-370D-462E-9AA8-7E87142F70B9"
                                },
                                {
                                    "title":"Fixing ORA-01822 with DBMS_DST Package After Upgrades",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-30A17B15-665C-4403-A66F-8BC1A0585A15"
                                },
                                {
                                    "title":"Fixing ORA-28365: Wallet Is Not Open Error",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-C6C97136-C79D-49EB-A1AA-16744FB3DA4B"
                                },
                                {
                                    "title":"Resolving issues with view CDB_JAVA_POLICY",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-1F73128E-6DCE-46F8-9587-6E833732607F"
                                },
                                {
                                    "title":"Continuing Upgrades After Server Restarts (ADVM/ACFS Driver Error)",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-2FF8F7DD-EF1A-4E2B-8A86-EC427B78EA2C"
                                },
                                {
                                    "title":"Component Status and Upgrades",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-8AA2F6FB-516F-408C-868C-3979C46A5F7C",
                                    "topics":[
                                        {
                                            "title":"Understanding Component Status With the Post-Upgrade Status Tool",
                                            "href":"troubleshooting-oracle-database-upgrade.html#GUID-5F3F0B5E-BF6E-488E-8819-850843758675"
                                        },
                                        {
                                            "title":"Component OPTION OFF Status and Upgrades",
                                            "href":"troubleshooting-oracle-database-upgrade.html#GUID-3D897BE9-AF83-4D96-831E-02AA070C7632"
                                        },
                                        {
                                            "title":"Example of an Upgrade Summary Report",
                                            "href":"troubleshooting-oracle-database-upgrade.html#GUID-5D85ED88-0740-44DE-AA53-318D7240FF0E"
                                        }
                                    ]
                                },
                                {
                                    "title":"Standard Edition Starter Database and Components with Status OPTION OFF",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-16E662C1-2877-4C97-A9D5-531735FAA2AC"
                                },
                                {
                                    "title":"Adjusting Oracle ASM Password File Location After Upgrade",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-50E0EE5B-9549-4A35-8F27-5134AC42D484"
                                },
                                {
                                    "title":"Fixing \"Warning XDB Now Invalid\" Errors with Pluggable Database Upgrades",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-371A976A-C6B5-408A-85C3-13B8D4D80BF0"
                                },
                                {
                                    "title":"Fixing ORA-27248: sys.dra_reevaluate_open_failures is running",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-0BBD601F-03AD-495F-BE3B-EBF6F5180A12"
                                },
                                {
                                    "title":"Fixing ORA-22288: File or LOB Operation FILEOPEN Failed Soft Link in Path",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-82B1B90A-9268-4FCA-91B5-9486A01B0C11"
                                },
                                {
                                    "title":"Fixing Oracle Database Enterprise User Security, OLS-OID, and Provisioning Profile Error",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-39D29002-04E8-4C15-99CB-3BA74DE7C9E3"
                                },
                                {
                                    "title":"Fixing 32K Migration Error with utl32k.sql and MAX_STRING_SIZE",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-C9EA4C17-E283-4D21-9C9B-0EE97FE2A486"
                                },
                                {
                                    "title":"Recovering from a CRS Shutdown and Oracle ASM Losing Rolling Migration",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-906173BF-B48E-4E2A-86EF-7B174E564AC0"
                                },
                                {
                                    "title":"Data Type Versioning Can Cause Cross-Version Replication (ORA-26656)",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-6D5F3EEE-D8CC-45F8-81A7-1C3BC96952FA"
                                },
                                {
                                    "title":"Referenced Symbol Count is Undefined Error libclntsh.so.11.1",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-A6410CD4-4DCE-41D3-BBA1-0CF1CC8204E5"
                                },
                                {
                                    "title":"Resolving Timestamp Errors Due to ISO 8601 Timestamps",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-264F7099-5C9F-42D1-B3D7-D9754CA7F3C2"
                                },
                                {
                                    "title":"Fixing Failed Upgrades Where Only Datapatch Fails",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-2F4DAD7F-92E4-415C-A91B-7EE480633E3E"
                                },
                                {
                                    "title":"Error \"Timezone Datafiles May Not Be Downgraded To a Lower Version\"",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-C18782A1-4A4F-4C06-B0D6-F58ECE28E13C"
                                },
                                {
                                    "title":"Fixing Failures to Complete Registration of Listeners with DBUA",
                                    "href":"troubleshooting-oracle-database-upgrade.html#GUID-25BB78B8-B59D-4039-B838-9BCA13A5377C"
                                }
                            ]
                        },
                        {
                            "title":"Rerunning Upgrades for Oracle Database",
                            "href":"rerunning-upgrades-oracle-database.html#GUID-190D00A4-BE9A-4139-B3FC-A29C2BFBE91B",
                            "topics":[
                                {
                                    "title":"About Rerunning Upgrades for Oracle Database",
                                    "href":"rerunning-upgrades-oracle-database.html#GUID-6E157C6B-879D-49B2-82A3-E5A4C375D48F"
                                },
                                {
                                    "title":"Rerunning Upgrades with the Upgrade (catctl.pl) Script",
                                    "href":"rerunning-upgrades-oracle-database.html#GUID-E281A34F-DCC4-4F4C-B7EF-03E694BB0CFF"
                                },
                                {
                                    "title":"Options for Rerunning the Upgrade for Multitenant Databases (CDBs)",
                                    "href":"rerunning-upgrades-oracle-database.html#GUID-CF18A968-0C0E-4223-AA9F-37B39F31ACBA",
                                    "topics":[
                                        {
                                            "title":"Rerun the Entire Upgrade for the CDB",
                                            "href":"rerunning-upgrades-oracle-database.html#GUID-AA02C085-6155-467E-AFF3-FB409C69E3B1"
                                        },
                                        {
                                            "title":"Rerun the Upgrade Only on Specified CDBs",
                                            "href":"rerunning-upgrades-oracle-database.html#GUID-226F1EBA-3272-4BD2-A5FA-D08ED1BA5808"
                                        },
                                        {
                                            "title":"Rerun the Upgrade While Other PDBs Are Online",
                                            "href":"rerunning-upgrades-oracle-database.html#GUID-BC8D35BA-2FDE-434C-936B-E7432B2F00AA"
                                        },
                                        {
                                            "title":"Rerun the Upgrade Using an Inclusion List to Specify a CDB or PDBs",
                                            "href":"rerunning-upgrades-oracle-database.html#GUID-B8C68634-CB6B-415D-BB31-E8E11EBAF742"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"Restarting the Upgrade from a Specific Phase that Failed Using -p",
                            "href":"restarting-upgrade-specific-phase-that-failed-using-p.html#GUID-AA77A1B9-C598-4979-AF3A-12DE713537F4",
                            "topics":[
                                {
                                    "title":"Reviewing CDB Log Files for Failed Phases",
                                    "href":"restarting-upgrade-specific-phase-that-failed-using-p.html#GUID-F9907B67-78C3-4BCB-B830-8A196BC1F0A2"
                                },
                                {
                                    "title":"Reviewing Non-CDB Log Files for Failed Phases",
                                    "href":"restarting-upgrade-specific-phase-that-failed-using-p.html#GUID-30AB55D5-2061-419D-8CDA-A78A269C79E6"
                                },
                                {
                                    "title":"Procedure for Finding and Restarting Multitenant Upgrades from a Failed Phase",
                                    "href":"restarting-upgrade-specific-phase-that-failed-using-p.html#GUID-29A9C778-7AE6-4C2C-85E6-4ADDA8466A34"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">4 </span> Post-Upgrade Tasks for Oracle Database",
                    "href":"post-upgrade-tasks-oracle-database.html#GUID-637ADBD0-866B-4B64-9513-4C7CDE84895C",
                    "topics":[
                        {
                            "title":"Check the Upgrade With Post-Upgrade Status Tool",
                            "href":"check-upgrade-post-upgrade-status-tool.html#GUID-ADD5F3FB-5B7B-42F2-AB1B-FE0B9DE0CF41"
                        },
                        {
                            "title":"How to Show the Current State of the Oracle Data Dictionary",
                            "href":"how-to-show-current-state-oracle-data-dictionary.html#GUID-57458D9B-9927-4E1A-8F6C-5B2A301B30C4"
                        },
                        {
                            "title":"Required Tasks to Complete After Upgrading Oracle Database",
                            "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-C9102D8A-0BD1-41FF-9AE9-656818267FB9",
                            "topics":[
                                {
                                    "title":"Setting Environment Variables on Linux and Unix Systems After Manual Upgrades",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-C9AAA819-C4E2-4674-B8E3-530921AF49F7"
                                },
                                {
                                    "title":"Recompiling All Invalid Objects",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-1023C5FB-B409-4F16-BCA1-C14CB9B7E625"
                                },
                                {
                                    "title":"Recompiling All Invalid Objects on Multitenant Architecture Databases",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-EB3A48A3-612F-4062-B73A-CDF24C4AF15D"
                                },
                                {
                                    "title":"Track Invalid Object Recompilation Progress",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-FF36ABBF-7578-47DF-A4F2-6AC2FDA5CA33"
                                },
                                {
                                    "title":"Running OPatch Commands After Upgrading Oracle Database",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-21424A22-F527-4E2F-A072-FD600E5BD449"
                                },
                                {
                                    "title":"Setting oratab and Scripts to Point to the New Oracle Location After Upgrading Oracle Database",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-04943AB1-2558-4058-81AA-26EB6C2E5C38"
                                },
                                {
                                    "title":"Check PL/SQL Packages and Dependent Procedures",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-3F55A8C1-C867-4483-AB43-B2D12D9745BA"
                                },
                                {
                                    "title":"Upgrading Tables Dependent on Oracle-Maintained Types",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-B57B8AF5-C22C-4CE7-8D9D-AAA00B9FF3E3"
                                },
                                {
                                    "title":"Enabling the New Extended Data Type Capability",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-88FB7FFD-4392-49C6-843A-45B49F8A1821"
                                },
                                {
                                    "title":"Adjusting Minimum and Maximum for Parallel Execution Servers",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-E3E9F44D-6769-4E30-A61F-12E91168640C"
                                },
                                {
                                    "title":"About Recovery Catalog Upgrade After Upgrading Oracle Database",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-56A8346B-EA67-46FB-AB4C-A7D0710C8CD8"
                                },
                                {
                                    "title":"Upgrading the Time Zone File Version After Upgrading Oracle Database",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-41C8B1F3-1294-4F58-99F7-AB75F9889E05"
                                },
                                {
                                    "title":"Upgrading Statistics Tables Created by the DBMS_STATS Package After Upgrading Oracle Database",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-B22CC865-E3FB-4D7E-821F-A60159E0F833"
                                },
                                {
                                    "title":"Upgrading Externally Authenticated SSL Users After Upgrading Oracle Database",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-751FEECC-E0C8-4C86-AC1C-AFB64C81CF00"
                                },
                                {
                                    "title":"Configuring the FTP and HTTP Ports and HTTP Authentication for Oracle XML DB",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-ACCBC4FB-2626-40AD-91A4-3E38DA4FF339"
                                },
                                {
                                    "title":"Install Oracle Text Supplied Knowledge Bases After Upgrading Oracle Database",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-C4517406-1BB3-41AA-AD27-8E18AA2E98C5"
                                },
                                {
                                    "title":"Rebuild Oracle Text Indexes Using AUTO_LEXER",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-BC3DDABF-E041-4CD5-964F-E291AB4D453F"
                                },
                                {
                                    "title":"Update Oracle Application Express Configuration After Upgrading Oracle Database",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-BF742F8E-61C6-4F7C-927D-26687D1A3B2F"
                                },
                                {
                                    "title":"Configure Access Control Lists (ACLs) to External Network Services",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-77701CFB-0716-40B4-B9BE-6E0A77506496"
                                },
                                {
                                    "title":"Enabling Oracle Database Vault After Upgrading Oracle Database",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-12B920E9-B2DA-48A0-832C-3E07D172A011",
                                    "topics":[
                                        {
                                            "title":"Upgrading Oracle Database Without Disabling Oracle Database Vault",
                                            "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-216BAD89-4ED9-43CB-B7A5-F710499673BE"
                                        },
                                        {
                                            "title":"Common Upgrade Scenarios with Oracle Database Vault",
                                            "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-68B42C38-0B29-49B0-8B9F-8885C450F6DF"
                                        }
                                    ]
                                },
                                {
                                    "title":"Check for the SQLNET.ALLOWED_LOGON_VERSION Parameter Behavior",
                                    "href":"required-tasks-complete-upgrading-oracle-database.html#GUID-433E0DB9-026E-4322-A8FF-BA0E108AB28B"
                                }
                            ]
                        },
                        {
                            "title":"Recommended and Best Practices to Complete After Upgrading Oracle Database",
                            "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-5196CE88-8669-45D6-8906-C45272940740",
                            "topics":[
                                {
                                    "title":"Back Up the Database",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-AA7E76B0-1571-4F24-A65D-756602A814B9"
                                },
                                {
                                    "title":"Running Postupgrade Fixup Scripts",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-54415206-25BF-46EE-BAF4-1AA6FCEB90B2"
                                },
                                {
                                    "title":"Gathering Dictionary Statistics After Upgrading",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-8AF2DB10-9746-4938-B69F-D1F3890BEAF5"
                                },
                                {
                                    "title":"Regathering Fixed Objects Statistics with DBMS_STATS",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-44B9B605-8FFE-4FFD-89A0-105CE4C4939E"
                                },
                                {
                                    "title":"Reset Passwords to Enforce Case-Sensitivity",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-082A0965-7898-4D84-885C-24BEE2493FC4"
                                },
                                {
                                    "title":"Finding and Resetting User Passwords That Use the 10G Password Version",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-D7B09DFE-F55D-449A-8F8A-174D89936304"
                                },
                                {
                                    "title":"Understand Oracle Grid Infrastructure, Oracle ASM, and Oracle Clusterware",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-D7793765-AF4C-4091-BCCB-E5720FDE0EF4"
                                },
                                {
                                    "title":"Oracle Grid Infrastructure Installation and Upgrade and Oracle ASM",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-4266E383-39F3-4858-9A67-D11CCD664C88"
                                },
                                {
                                    "title":"Add New Features as Appropriate",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-128BB0D3-0739-4631-8283-F667302DCBF1"
                                },
                                {
                                    "title":"Develop New Administrative Procedures as Needed",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-36C4A570-B944-4E0E-B754-EBC04CC4F07C"
                                },
                                {
                                    "title":"Set Threshold Values for Tablespace Alerts",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-0A27E3EA-B320-4DED-8587-9ED5E3DAAEC3"
                                },
                                {
                                    "title":"Migrating From Rollback Segments To Automatic Undo Mode",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-7BBB2D85-E8FB-437B-BA21-6D08A04BB7AE"
                                },
                                {
                                    "title":"Migrating Tables from the LONG Data Type to the LOB Data Type",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-07FE428B-C14E-4457-9A8E-04964D52B49E"
                                },
                                {
                                    "title":"Migrate Your Upgraded Oracle Databases to Use Unified Auditing",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-EB285325-CA65-41B4-BE58-D3F69CFED789",
                                    "topics":[
                                        {
                                            "title":"Understanding Unified Auditing Migration Process for Oracle Database",
                                            "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-C13E0E20-2FCC-4DDE-A707-3C29D0C04E20"
                                        },
                                        {
                                            "title":"Migrating to Unified Auditing for Oracle Database",
                                            "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-21FE7F97-DE79-43D4-A8DD-D66035C17608"
                                        },
                                        {
                                            "title":"About Managing Earlier Audit Records After You Migrate to Unified Auditing",
                                            "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-A44905C3-3D2E-4FAD-BA35-8F8E956D874C"
                                        },
                                        {
                                            "title":"Removing the Unified Auditing Functionality",
                                            "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-28211AC6-2197-4D04-9DB9-1C3D6E030F03"
                                        },
                                        {
                                            "title":"Obtaining Documentation References if You Choose Not to Use Unified Auditing",
                                            "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-94E741BC-4503-4278-8F04-D780AAF7F7A6"
                                        }
                                    ]
                                },
                                {
                                    "title":"Identify Oracle Text Indexes for Rebuilds",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-7A5E0A01-7711-4EEA-88DD-EECF16B9A6F7"
                                },
                                {
                                    "title":"Dropping and Recreating DBMS_SCHEDULER Jobs",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-9FF51E36-BD45-429F-8E4D-25FA9F0574D0"
                                },
                                {
                                    "title":"Transfer Unified Audit Records After the Upgrade",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-4BC5F146-BF0D-4BCF-8A0B-1B67B767EEF1",
                                    "topics":[
                                        {
                                            "title":"About Transferring Unified Audit Records After an Upgrade",
                                            "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-D71F00E9-2A6B-4F9A-98A7-C643F18E3DBA"
                                        },
                                        {
                                            "title":"Transferring Unified Audit Records After an Upgrade",
                                            "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-DA086BFC-D267-47C7-B4DF-8D5754A0AD9F"
                                        }
                                    ]
                                },
                                {
                                    "title":"About Testing the Upgraded Production Oracle Database",
                                    "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-F2334FB4-3FE6-4B75-A5DE-2FE2F9A4C8E4"
                                }
                            ]
                        },
                        {
                            "title":"Recommended Tasks After Upgrading an Oracle RAC Database",
                            "href":"recommended-tasks-after-upgrade-oracle-rac.html#GUID-67805AAF-14F4-4B57-8D83-FD7B608E0444"
                        },
                        {
                            "title":"Recommended Tasks After Upgrading Oracle ASM",
                            "href":"recommended-tasks-upgrading-oracle-asm.html#GUID-984B06FD-3B16-4713-BE62-7079E30340B1",
                            "topics":[
                                {
                                    "title":"Create a Shared Password File In the ASM Diskgroup",
                                    "href":"recommended-tasks-upgrading-oracle-asm.html#GUID-9E1D59BA-DC16-4C76-9E27-50D11D44C76B"
                                },
                                {
                                    "title":"Reset Oracle ASM Passwords to Enforce Case-Sensitivity",
                                    "href":"recommended-tasks-upgrading-oracle-asm.html#GUID-7E0AE7CE-7407-4782-95E7-98DFD8543414"
                                },
                                {
                                    "title":"Advancing the Oracle ASM and Oracle Database Disk Group Compatibility",
                                    "href":"recommended-tasks-upgrading-oracle-asm.html#GUID-6832647D-A501-488D-ABD4-2C375CC1F7CE"
                                },
                                {
                                    "title":"Set Up Oracle ASM Preferred Read Failure Groups",
                                    "href":"recommended-tasks-upgrading-oracle-asm.html#GUID-CB3B0A43-827B-43CC-9149-E76ABA53E563"
                                }
                            ]
                        },
                        {
                            "title":"Recommended Tasks After Upgrading Oracle Database Express Edition",
                            "href":"recommended-tasks-upgrading-oracle-database-express-edition.html#GUID-4C7731F9-C3D8-4198-8709-48D80416A479"
                        },
                        {
                            "title":"Tasks to Complete Only After Manually Upgrading Oracle Database",
                            "href":"tasks-complete-only-manually-upgrading-oracle-database.html#GUID-7611721E-D87B-41FF-9595-F9B311ABA0EC",
                            "topics":[
                                {
                                    "title":"Changing Passwords for Oracle Supplied Accounts",
                                    "href":"tasks-complete-only-manually-upgrading-oracle-database.html#GUID-AFE1C616-E075-4C3A-AE21-18EA39A7E37C"
                                },
                                {
                                    "title":"Create or Migrate Your Password File with ORAPWD",
                                    "href":"tasks-complete-only-manually-upgrading-oracle-database.html#GUID-A11AEB63-82A5-468A-885D-892FD8EA4D10"
                                },
                                {
                                    "title":"Migrating Your Initialization Parameter File to a Server Parameter File",
                                    "href":"tasks-complete-only-manually-upgrading-oracle-database.html#GUID-E7DD2B21-0C4E-49D7-949C-CA6A969C5CF6"
                                },
                                {
                                    "title":"Identifying and Copying Oracle Text Files to a New Oracle Home",
                                    "href":"tasks-complete-only-manually-upgrading-oracle-database.html#GUID-AB687163-AD3B-4AED-B1F3-342E1C980CC8"
                                },
                                {
                                    "title":"Upgrading the Oracle Clusterware Configuration",
                                    "href":"tasks-complete-only-manually-upgrading-oracle-database.html#GUID-EB10A7EC-A574-4CC5-BBAA-FD886778B084"
                                },
                                {
                                    "title":"Adjust the Initialization Parameter File for the New Release",
                                    "href":"tasks-complete-only-manually-upgrading-oracle-database.html#GUID-CB01FDA7-56CC-4EF5-930E-90E344B47C12",
                                    "topics":[
                                        {
                                            "title":"Setting the COMPATIBLE Initialization Parameter After Upgrade",
                                            "href":"tasks-complete-only-manually-upgrading-oracle-database.html#GUID-C2DE66A9-61F0-41AE-A028-FEAC57ECC0BC"
                                        },
                                        {
                                            "title":"Adjust TNSNAMES.ORA and LISTENER Parameters After Upgrade",
                                            "href":"tasks-complete-only-manually-upgrading-oracle-database.html#GUID-345F0189-8718-4336-9807-4C98BAD58AC3"
                                        }
                                    ]
                                },
                                {
                                    "title":"Set CLUSTER_DATABASE Initialization Parameter For Oracle RAC After Upgrade",
                                    "href":"tasks-complete-only-manually-upgrading-oracle-database.html#GUID-05B9278E-A05C-4F0E-AC56-19A4DD076FFA"
                                }
                            ]
                        },
                        {
                            "title":"Patch Set Updates and Requirements for Upgrading Oracle Database",
                            "href":"post-upgrade-tasks-oracle-database.html#GUID-46F09541-C36A-4790-B3D3-E0E336A7BBC3"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">5 </span> Upgrading Applications After Upgrading Oracle Database",
                    "href":"upgrading-apps-after-oracle-db-upgrade.html#GUID-54B5CF85-BEC6-464B-9CDC-B2D3597B7423",
                    "topics":[
                        {
                            "title":"Overview of Upgrading Applications on a New Oracle Database Release",
                            "href":"overview-upgrading-applications-new-oracle-database-release.html#GUID-FFD82ACD-F76B-42D7-AEF1-E8BBBDBF9B59"
                        },
                        {
                            "title":"Compatibility Issues for Applications on Different Releases of Oracle Database",
                            "href":"compatibility-issues-applications-different-releases-oracle-database.html#GUID-B66FED88-9808-4BCF-93A7-B4511FB536B4"
                        },
                        {
                            "title":"Software Upgrades and Client and Server Configurations for Oracle Database",
                            "href":"software-upgrades-and-client-and-server-configurations-oracle-database.html#GUID-4E4BED49-A224-443C-8321-7900A4D4AEFB",
                            "topics":[
                                {
                                    "title":"Possible Client and Server Configurations for Oracle Database",
                                    "href":"software-upgrades-and-client-and-server-configurations-oracle-database.html#GUID-03784EF2-5AD4-4628-BF99-D5E3728F29BF"
                                },
                                {
                                    "title":"Types of Software Upgrades for Oracle Database Client and Server Software",
                                    "href":"software-upgrades-and-client-and-server-configurations-oracle-database.html#GUID-DC14799F-9BE3-4751-8D27-216931D84273"
                                }
                            ]
                        },
                        {
                            "title":"Compatibility Rules for Applications When Upgrading Oracle Database Client or Server Software",
                            "href":"compatibility-rules-applications-when-upgrading-oracle-database-client-server-software.html#GUID-5E9ED158-696B-4320-A2F8-7AE21BDFA0FB",
                            "topics":[
                                {
                                    "title":"Rules for Upgrading Oracle Database Server Software",
                                    "href":"compatibility-rules-applications-when-upgrading-oracle-database-client-server-software.html#GUID-E3D14934-B8C4-4C76-B5E8-831A0691B5F5",
                                    "topics":[
                                        {
                                            "title":"If You Do Not Change the Client Environment, Then You Are Not Required to Relink",
                                            "href":"compatibility-rules-applications-when-upgrading-oracle-database-client-server-software.html#GUID-5311F785-7BB3-481B-89E1-128A46431E2C"
                                        },
                                        {
                                            "title":"Applications Can Run Against Newer or Older Oracle Database Server Releases",
                                            "href":"compatibility-rules-applications-when-upgrading-oracle-database-client-server-software.html#GUID-2DC4B3A9-1F26-4EAC-A5A4-6A9BE186CB75"
                                        }
                                    ]
                                },
                                {
                                    "title":"Upgrading the Oracle Database Client Software",
                                    "href":"compatibility-rules-applications-when-upgrading-oracle-database-client-server-software.html#GUID-5F24217B-AA86-4248-89AF-5887C93CE594",
                                    "topics":[
                                        {
                                            "title":"About Linking Applications with Newer Libraries",
                                            "href":"compatibility-rules-applications-when-upgrading-oracle-database-client-server-software.html#GUID-5B08228F-814E-4556-B4D5-58E8B1CE1DD1"
                                        },
                                        {
                                            "title":"Statically Linked Applications Must Always Be Relinked",
                                            "href":"compatibility-rules-applications-when-upgrading-oracle-database-client-server-software.html#GUID-4D794002-EA30-4ECA-B920-988F51B8D2C7"
                                        },
                                        {
                                            "title":"About Relinking Dynamically Linked Applications",
                                            "href":"compatibility-rules-applications-when-upgrading-oracle-database-client-server-software.html#GUID-A3BE8282-84F4-4D58-B196-F3610A535D82"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"About Upgrading Precompiler and OCI Applications in Oracle Database",
                            "href":"-upgrade-precompiler-oci-apps-oracle-database.html#GUID-624A9128-1FD8-4CE6-B69A-97A6E4A4882E"
                        },
                        {
                            "title":"About Upgrading Options for Oracle Precompiler and OCI Applications",
                            "href":"upgrade-options-precompiler-oci.html#GUID-70243AA4-D921-4EF7-8C33-DB0B6BF27739",
                            "topics":[
                                {
                                    "title":"Option 1: Leave the Application Unchanged",
                                    "href":"upgrade-options-precompiler-oci.html#GUID-E0FF21C4-AEE6-4733-B14B-D0493D3E1BD9"
                                },
                                {
                                    "title":"Option 2: Precompile or Compile the Application Using the New Software",
                                    "href":"upgrade-options-precompiler-oci.html#GUID-FFD55594-12AA-48E6-B59A-4DAC8D2653AE"
                                },
                                {
                                    "title":"Option 3: Change the Application Code to Use New Oracle Database Features",
                                    "href":"upgrade-options-precompiler-oci.html#GUID-569FEE3E-7209-467E-8C96-C99772592C9B"
                                },
                                {
                                    "title":"Changing Oracle Precompiler and OCI Application Development Environments",
                                    "href":"upgrade-options-precompiler-oci.html#GUID-D2B0EF1B-B3BC-4316-8C4A-6827731EC4C0",
                                    "topics":[
                                        {
                                            "title":"Changing Precompiler Applications",
                                            "href":"upgrade-options-precompiler-oci.html#GUID-B21F5C4E-0AB9-4CFA-92FF-D39D33C927D1"
                                        },
                                        {
                                            "title":"Changing OCI Applications",
                                            "href":"upgrade-options-precompiler-oci.html#GUID-306E0DA9-6571-4E41-AF1B-AD7D9866026F"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"Upgrading SQL*Plus Scripts and PL/SQL after Upgrading Oracle Database",
                            "href":"upgrading-sqlplus-scripts-and-pl-sql-database.html#GUID-E67A7E60-6FFD-4A99-848B-CC65B8E14FE1"
                        },
                        {
                            "title":"About Upgrading Oracle Forms or Oracle Developer Applications",
                            "href":"upgrading-oracle-forms-oracle-developer-applications.html#GUID-E959A530-051A-4455-BD06-AF5CCB62E2FC"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">6 </span> Downgrading Oracle Database to an Earlier Release",
                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-CAD9888A-2E6E-48F8-938C-B3E861738606",
                    "topics":[
                        {
                            "title":"Supported Releases for Downgrading Oracle Database",
                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-59F92E2A-DC4D-46A3-9AC9-63F47BE4A86F"
                        },
                        {
                            "title":"Check for Incompatibilities When Downgrading Oracle Database",
                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-16E57DCD-0136-4E2D-8EB8-CE5572FCB010"
                        },
                        {
                            "title":"Perform a Full Backup Before Downgrading Oracle Database",
                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-FFECBDB5-6FA3-4A32-B817-BCBCE4C93C4B"
                        },
                        {
                            "title":"Performing Required Predowngrade Steps for Oracle Database",
                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-FC6DF99A-F32B-4258-8E5B-2DB5D7AD2A73"
                        },
                        {
                            "title":"Downgrading a CDB or Non-CDB Oracle Database",
                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-7D5ED02A-8A8B-452C-B4BA-91DFB556BACE"
                        },
                        {
                            "title":"About Downgrades and Invalid Objects with Component Status OPTION OFF",
                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-F1FB354D-8C53-4E80-A4C9-A6366055028C"
                        },
                        {
                            "title":"Downgrading a Single Pluggable Oracle Database (PDB)",
                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-66560D5D-A5C8-4ACC-82C0-46315465E77F"
                        },
                        {
                            "title":"Downgrading PDBs That Contain Oracle Application Express",
                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-EEC355DD-AA56-4972-9EB3-139CEC457D65"
                        },
                        {
                            "title":"Post-Downgrade Tasks for Oracle Database Downgrades",
                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-5DF45F07-90FB-4AE2-9814-4956D60726E5",
                            "topics":[
                                {
                                    "title":"Oracle XML DB Authentication Recommendations for an Oracle Database Downgrade",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-2C4D727B-48E3-4AD2-852D-D3A54C838322"
                                },
                                {
                                    "title":"Reapply Release Update and Other Patches After Downgrade",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-5C696750-2055-4FB2-8EB6-83E5139B1EA2"
                                },
                                {
                                    "title":"Re-enabling Oracle Database Vault after Downgrading Oracle Database",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-B8C9E95E-AC37-48F0-945F-4A17E111E7D5"
                                },
                                {
                                    "title":"Restoring the Configuration for Oracle Clusterware",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-67714F0E-0CE4-4527-86AF-8918914DACAF"
                                },
                                {
                                    "title":"Restoring Oracle Enterprise Manager after Downgrading Oracle Database",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-C2C793F4-67A1-4F10-88DB-EE09D7C3B4CD",
                                    "topics":[
                                        {
                                            "title":"Requirements for Restoring Oracle Enterprise Manager After Downgrading",
                                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-648BBBCF-0F0E-43CB-ACF7-B8F15882F422"
                                        },
                                        {
                                            "title":"Running EMCA to Restore Oracle Enterprise Manager After Downgrading",
                                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-2EEC4E63-0F98-4EC8-8630-46F69A5A1FB0",
                                            "topics":[
                                                {
                                                    "title":"Running emca on a Single-Instance Oracle Database Without Oracle ASM",
                                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-C2AC0068-9BB8-4CE5-B15D-5603E5613167"
                                                },
                                                {
                                                    "title":"Running EMCA on an Oracle RAC Database Without Oracle ASM",
                                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-5E91C301-67ED-4C35-BAE6-2A533E84829B"
                                                },
                                                {
                                                    "title":"Running EMCA on a Single-Instance Oracle ASM Instance",
                                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-5F8A1676-8ACF-4D19-879A-72524BB7AF6A"
                                                },
                                                {
                                                    "title":"Running emca on an Oracle ASM on Oracle RAC Instance",
                                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-2F275E58-A811-41F9-9AF5-0D8E400F7F02"
                                                },
                                                {
                                                    "title":"Running emca on a Single-Instance Oracle Database With Oracle ASM",
                                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-3F8EFEF3-1410-4983-87DA-042A9DD69601"
                                                },
                                                {
                                                    "title":"Running emca on an Oracle RAC Database and Oracle ASM Instance",
                                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-A1DDA4D7-7EC2-4D1C-89E3-A1C8D9CC142E"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"Running the emdwgrd utility to restore Enterprise Manager Database Control",
                                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-A97C04EC-BD77-4075-A354-03788DBCB74D"
                                        }
                                    ]
                                },
                                {
                                    "title":"Restoring Oracle Application Express to the Earlier Release",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-593D396B-A1C2-4453-BBDA-8C4455000CA0"
                                },
                                {
                                    "title":"Gathering Dictionary Statistics After Downgrading",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-6B972762-122D-4CFF-B910-6F93409DAC5F"
                                },
                                {
                                    "title":"Regathering Fixed Object Statistics After Downgrading",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-42DB61B8-ADA7-426D-B9E6-24365BDE0506"
                                },
                                {
                                    "title":"Regathering Stale CBO Statistics After Downgrade",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-3B34038A-2C85-4B77-B91D-BB9665883B21"
                                }
                            ]
                        },
                        {
                            "title":"Troubleshooting the Downgrade of Oracle Database",
                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-F3DAC69A-A5D0-4998-A14D-DCC8599AD3FA",
                            "topics":[
                                {
                                    "title":"Errors Downgrading Oracle Database Components with catdwgrd.sql Script",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-B34BCFE6-C55F-4D69-BA59-FCC883CD3EA1"
                                },
                                {
                                    "title":"Oracle Multimedia Downgrade and imrelod.sql Script Error",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-627D70F7-D0B2-442C-B520-06BEBDEBF59C"
                                },
                                {
                                    "title":"Oracle Database Vault and dvrelod.sql Script Error",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-DC657D49-A972-4F3F-9D39-D59860133BF8"
                                },
                                {
                                    "title":"Downgrading Oracle Grid Infrastructure (Oracle Restart) After Successful or Failed Upgrade",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-4B6D5991-6336-4FCC-A8B3-6DA35F4D4C91"
                                },
                                {
                                    "title":"Oracle ACFS and Oracle Grid Infrastructure Downgrades to 11g Release 2 (11.2)",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-865ED278-8D25-4D79-8C8F-70343C4535F1"
                                },
                                {
                                    "title":"Database Links Passwords After Downgrading Oracle Database 11g Release 1 (11.1)",
                                    "href":"downgrading-oracle-db-after-upgrade.html#GUID-F5278C79-EB57-4E68-BE58-758F7A9F22FA",
                                    "topics":[
                                        {
                                            "title":"ORA-00600 Errors with Database Links Passwords After Downgrading to Oracle Database 11.1 Release 1",
                                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-339D0338-A80C-4B5C-8406-57E7ABEC8121"
                                        },
                                        {
                                            "title":"Using Oracle Data Pump Export to Create a Dump File Containing All Existing Database Links",
                                            "href":"downgrading-oracle-db-after-upgrade.html#GUID-EB0943DA-C2C5-4CC9-93B5-9B2675BCD496"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">7 </span> Migrating Data Using Oracle Data Pump",
                    "href":"migrating-data-after-upgrade-oracle.html#GUID-1BCDF563-1843-4B9F-B72E-75A0634D64C9",
                    "topics":[
                        {
                            "title":"Overview of Data Pump and Export/Import For Migrating Data",
                            "href":"migrating-data-after-upgrade-oracle.html#GUID-F0E5FE65-14A1-4621-BA54-4239B84A1CBC"
                        },
                        {
                            "title":"Migrating Data With Oracle Data Pump Before Upgrades",
                            "href":"migrating-data-after-upgrade-oracle.html#GUID-E6B205EB-3D36-41B9-A2C3-440DBFB00FAB"
                        },
                        {
                            "title":"Importing a Full Oracle Database Using a Network Link",
                            "href":"migrating-data-after-upgrade-oracle.html#GUID-072AC19E-EEBF-4663-AB3A-4CFA74873C87"
                        },
                        {
                            "title":"Data Pump Requirements When Downgrading Oracle Database",
                            "href":"migrating-data-after-upgrade-oracle.html#GUID-A49DB1A6-CFB1-4830-89C4-BBF2E4A86DBC"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">8 </span> Behavior Changes, Deprecated and Desupported Features for Oracle Database 18c",
                    "href":"behavior-change-deprecate-desupport-oracle-12c-rel-2.html#GUID-3BAFD95E-4D00-4F0F-BC80-6064F497F878",
                    "topics":[
                        {
                            "title":"About Deprecated and Desupported Status",
                            "href":"deprecated-desupported-status.html#GUID-D49E901E-D3AA-4C7F-9DD2-7134820028BC"
                        },
                        {
                            "title":"Simplified Image-Based Oracle Database Installation",
                            "href":"simplified-image.based-db-installation.html#GUID-D7BE18EE-1C3B-4500-91F3-60663B5B65DE"
                        },
                        {
                            "title":"Initialization Parameter Changes in Oracle Database 18c",
                            "href":"initialization-parameter-changes-oracle-database-18c.html#GUID-9455629C-9DA3-499B-AB06-02F98C2C6442",
                            "topics":[
                                {
                                    "title":"STANDBY_ARCHIVE_DEST is Desupported",
                                    "href":"initialization-parameter-changes-oracle-database-18c.html#GUID-1D8D61C9-6C18-43F7-932C-9F445ED5334E"
                                },
                                {
                                    "title":"UNIFORM_LOG_TIMESTAMP_FORMAT Changes in INIT.ORA",
                                    "href":"initialization-parameter-changes-oracle-database-18c.html#GUID-3DFC23CF-A55A-45C9-B049-F762CC9CA1A7"
                                },
                                {
                                    "title":"Desupport of UTL_FILE_DIR Initialization Parameter",
                                    "href":"initialization-parameter-changes-oracle-database-18c.html#GUID-C03F4062-9AB6-4FFE-8CF8-28F8AF014783"
                                }
                            ]
                        },
                        {
                            "title":"Deprecated Features in Oracle Database 18c",
                            "href":"deprecated-features-oracle-database-18c.html#GUID-3A910F59-A92E-4905-BBC8-A12C930CB82A",
                            "topics":[
                                {
                                    "title":"Data Guard MAX_CONNECTIONS Attribute is Deprecated",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-C51C6C1A-003B-44F0-B49E-D78CF072688B"
                                },
                                {
                                    "title":"Extended Datatype Support (EDS) is Deprecated",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-69E7F342-3717-4F3A-809F-66BD9AF4894F"
                                },
                                {
                                    "title":"GET_* Functions Deprecated in the DBMS_DATA_MINING Package",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-B6E9C998-9B88-4087-BDB7-CF07BDEB5FA3"
                                },
                                {
                                    "title":"Package DBMS_XMLQUERY is deprecated",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-7F691CE6-4756-436C-B28E-E6E9215C4C84"
                                },
                                {
                                    "title":"Package DBMS_XMLSAVE is Deprecated",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-8C087BF4-8E46-4C5D-8456-868D1ED7089A"
                                },
                                {
                                    "title":"Deprecated Columns in Oracle Label Security Views",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-0CBEF4E5-B33C-46DE-BD7A-040E90C61EEF"
                                },
                                {
                                    "title":"Returning JSON True or False Values using NUMBER is Deprecated",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-7D7DDC61-5721-48F8-B090-9ABCB34D763D"
                                },
                                {
                                    "title":"Deprecation of MAIL_FILTER in Oracle Text",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-D3888CA1-0BB3-4B15-A202-C3B8706D1F62"
                                },
                                {
                                    "title":"Deprecation of asmcmd showversion Option",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-E2CDCC2F-CA08-4F40-8E53-7B97FC01B2BD"
                                },
                                {
                                    "title":"Deprecation of NEWS_SECTION_GROUP in Oracle Text",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-B228785A-1537-4C35-85C9-3ADC577C19FD"
                                },
                                {
                                    "title":"Oracle Net Services Support for SDP is Deprecated",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-BD37AB8C-E918-424B-9CD9-0279D2DA698D"
                                },
                                {
                                    "title":"Deprecation of Oracle Multimedia",
                                    "href":"terminal-release-oracle-multimedia.html#GUID-DBA90E57-2BD8-4CEE-A74B-BFC889B78057"
                                },
                                {
                                    "title":"Deprecation of Flex Cluster (Hub/Leaf) Architecture",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-E04A978E-20B3-4DE2-B76A-FD9C2E5490FA"
                                },
                                {
                                    "title":"Deprecation of PRODUCT_USER_PROFILE Table",
                                    "href":"deprecated-features-oracle-database-18c.html#GUID-790B8B45-F021-45B8-8047-325298CD34BD"
                                }
                            ]
                        },
                        {
                            "title":"Desupported Features in Oracle Database 18c",
                            "href":"desupported-features-oracle-database-18c.html#GUID-E121B993-1845-405A-B4BA-047BAC00626E",
                            "topics":[
                                {
                                    "title":"Oracle Administration Assistant for Windows is Desupported",
                                    "href":"desupported-features-oracle-database-18c.html#GUID-C2330831-7DF2-41CB-85A2-19A50D99DB89"
                                },
                                {
                                    "title":"Oracle Multimedia DICOM Desupported Features",
                                    "href":"desupported-features-oracle-database-18c.html#GUID-BE4D429A-8CC9-4BAE-A9D5-02D76D650570"
                                },
                                {
                                    "title":"Oracle Multimedia Java Client Classes Desupported",
                                    "href":"desupported-features-oracle-database-18c.html#GUID-43ED37BC-9B27-4957-94CA-B7ABC6E81125"
                                },
                                {
                                    "title":"Oracle XML DB Desupported Features",
                                    "href":"desupported-features-oracle-database-18c.html#GUID-443093B5-971F-419B-83A7-3DA96C63D248"
                                },
                                {
                                    "title":"ODP.NET, Managed Driver - Distributed Transaction DLL Desupported",
                                    "href":"desupported-features-oracle-database-18c.html#GUID-69461E49-741A-4A96-A145-22977BFFC1B8"
                                },
                                {
                                    "title":"Data Guard Broker DGMGRL ALTER Syntax is Desupported",
                                    "href":"desupported-features-oracle-database-18c.html#GUID-73E74AB9-6975-4670-AFCE-296D25DB6A20"
                                },
                                {
                                    "title":"Desupport of CRSUSER on Microsoft Windows Systems",
                                    "href":"desupported-features-oracle-database-18c.html#GUID-DE41228A-A526-475F-BEF3-0A1EAA434663"
                                }
                            ]
                        },
                        {
                            "title":"Terminal Release of Oracle Streams",
                            "href":"terminal-release-oracle-streams.html#GUID-A28764D7-EDD7-41CF-92DF-60A3FBDD949A"
                        },
                        {
                            "title":"Feature Changes for Oracle Database 18c Upgrade Planning",
                            "href":"feature-changes-oracle-database-18c-upgrade.html#GUID-3ACF5470-0EA0-4ACA-A25F-A352B4DFF7ED",
                            "topics":[
                                {
                                    "title":"Support Indexing of JSON Key Names Longer Than 64 Characters",
                                    "href":"feature-changes-oracle-database-18c-upgrade.html#GUID-C4BD99B6-F243-4FAE-B305-800EE7496BC0"
                                },
                                {
                                    "title":"Upgrading Existing Databases is Replaced With Image Installations",
                                    "href":"feature-changes-oracle-database-18c-upgrade.html#GUID-DDBD7F7F-9C8B-4A50-BB35-CE29FB1AB163"
                                },
                                {
                                    "title":"RPM-Based Oracle Database Installation",
                                    "href":"feature-changes-oracle-database-18c-upgrade.html#GUID-1998A7C6-C1A9-4EF7-B4AE-B614059B2467"
                                },
                                {
                                    "title":"Token Limitations for Oracle Text Indexes",
                                    "href":"feature-changes-oracle-database-18c-upgrade.html#GUID-07C6FA15-3FBE-499B-8318-73F4B1190B19"
                                },
                                {
                                    "title":"Changes to /ALL/USER/DBA User View and PL/SQL External Libraries",
                                    "href":"feature-changes-oracle-database-18c-upgrade.html#GUID-543498D6-3799-4217-9BE3-4BB8630FC32D"
                                },
                                {
                                    "title":"Symbolic Links and UTL_FILE",
                                    "href":"feature-changes-oracle-database-18c-upgrade.html#GUID-FB90D5CC-71CC-471D-8CC5-F2A0514A7664"
                                },
                                {
                                    "title":"Deprecation of Direct Registration of Listeners with DBCA",
                                    "href":"feature-changes-oracle-database-18c-upgrade.html#GUID-09829E45-6A09-40F2-A848-3727B2D7171F"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">A </span> Changes for Earlier Releases of Oracle Database",
                    "href":"changes-oracle-database-earlier-releases.html#GUID-310194A7-CD7A-4BB3-BA72-93307932E762",
                    "topics":[
                        {
                            "title":"Behavior Changes in Oracle Database 12c Release 2 (12.2.0.1)",
                            "href":"behavior-changes-oracle-database-12c-122.html#GUID-2E7494A9-18C5-483D-95C6-7A13ECF879DF",
                            "topics":[
                                {
                                    "title":"Initialization Parameter Changes in Oracle Database 12c Release 2 (12.2)",
                                    "href":"initialization-parameter-changes-oracle-database-12c-r2.html#GUID-315015C7-EBC3-4AB4-B2E3-EB4A2F2A9452",
                                    "topics":[
                                        {
                                            "title":"Deprecated Initialization Parameters in Oracle Database 12c Release 2 (12.2)",
                                            "href":"initialization-parameter-changes-oracle-database-12c-r2.html#GUID-FE4B07AE-AFC0-4E6F-A755-0C0C2FE8093D"
                                        },
                                        {
                                            "title":"Desupported Initialization Parameters in Oracle Database 12c Release 2 (12.2)",
                                            "href":"initialization-parameter-changes-oracle-database-12c-r2.html#GUID-07DEAC4E-E415-42C4-8191-80A277BC5771"
                                        },
                                        {
                                            "title":"Initialization Parameter Default Changes in Oracle Database 12c Release 2 (12.2)",
                                            "href":"initialization-parameter-changes-oracle-database-12c-r2.html#GUID-BBBA10C4-F00A-4A9A-95A8-CCD925E4041C"
                                        }
                                    ]
                                },
                                {
                                    "title":"Deprecated Features in Oracle Database 12c Release 2 (12.2)",
                                    "href":"deprecated-features-oracle-database-12c-r2.html#GUID-C34B4093-97BE-4237-9BE4-F45450F23BA3",
                                    "topics":[
                                        {
                                            "title":"Deprecation of ALTER TYPE REPLACE",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-635540C5-0BD9-428B-A913-2D8040B85AB2"
                                        },
                                        {
                                            "title":"Deprecation of configToolAllCommands Script",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-183E4D73-A569-456B-BCD7-222A9FD49B3E"
                                        },
                                        {
                                            "title":"Deprecation of DBMS_DEBUG Package",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-D45ABA5A-0255-46A4-BD2C-81BFDBC25EA7"
                                        },
                                        {
                                            "title":"Deprecation of DBMS_JOB Package",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-34F6975B-CB48-40CC-8BD8-E5386B2EADAE"
                                        },
                                        {
                                            "title":"Deprecation of Intelligent Data Placement (IDC)",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-5D181F03-F74D-4888-B7B2-7176CF6FA8F8"
                                        },
                                        {
                                            "title":"Deprecation of CONTINUOUS_MINE Option",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-87A754A3-AC6B-4F84-8C36-AB90AC5032D4"
                                        },
                                        {
                                            "title":"Deprecation of Non-CDB Architecture",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-23F9C9D3-4267-4638-824D-C198D042B05B"
                                        },
                                        {
                                            "title":"Deprecation of Oracle Administration Assistant for Windows",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-9D848FE6-ED0D-43DA-983E-5C86B0BF228F"
                                        },
                                        {
                                            "title":"Deprecation of Oracle Data Provider for .NET PromotableTransaction Setting",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-8C6BE438-3489-42C1-BE9A-7ED0D76B75A1"
                                        },
                                        {
                                            "title":"Deprecation of oracle.jdbc.OracleConnection.unwrap()",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-8F12FF4E-E759-4DA7-8790-E0B5963A2468"
                                        },
                                        {
                                            "title":"Deprecation of oracle.jdbc.rowset Package",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-90B17B89-8628-42AC-B481-189A81B41262"
                                        },
                                        {
                                            "title":"Deprecation of oracle.sql.DatumWithConnection Classes",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-049364DD-B810-445F-8BCB-52BFC0A1D47A"
                                        },
                                        {
                                            "title":"Deprecation of Oracle Multimedia Java APIs",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-292A88FF-0321-4DCF-AC64-B7ABD9BDE554"
                                        },
                                        {
                                            "title":"Deprecation of Oracle Multimedia Support for DICOM",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-89BC4751-B6DC-4FCB-BFC9-B4E62CB31D47"
                                        },
                                        {
                                            "title":"Deprecation of Multimedia SQL/MM Still Image Standard Support",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-1239A86E-1391-4048-8C79-A1D59193CA5B"
                                        },
                                        {
                                            "title":"Deprecation of Unicode Collation Algorithm (UCA) 6.1 Collations",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-A043E3DA-E751-44B0-A6B7-6ED00C71A0F2"
                                        },
                                        {
                                            "title":"Deprecation of UNIFIED_AUDIT_SGA_QUEUE_SIZE",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-8986FB93-5CE1-42CE-881F-5F04B727AA16"
                                        },
                                        {
                                            "title":"Deprecation of VERIFY_FUNCTION and VERIFY_FUNCTION_11G",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-CA82E7EA-9EB0-4821-885B-20D8841EF207"
                                        },
                                        {
                                            "title":"Deprecation of V$MANAGED_STANDBY",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-2149DC8C-1BF1-4D46-A97E-5592B5701FE4"
                                        },
                                        {
                                            "title":"Deprecation of Some XML DB Functions",
                                            "href":"deprecated-features-oracle-database-12c-r2.html#GUID-056B1151-4187-4B98-9860-7717A4DF0294"
                                        }
                                    ]
                                },
                                {
                                    "title":"Desupported Features in Oracle Database 12c Release 2 (12.2)",
                                    "href":"desupported-features-oracle-database-12c-r2.html#GUID-685A0333-1051-4306-B84A-574DAFE799B2",
                                    "topics":[
                                        {
                                            "title":"Desupport of Advanced Replication",
                                            "href":"desupported-features-oracle-database-12c-r2.html#GUID-32AC17C8-B9CB-44D5-B6B6-CB8D1AA8E307"
                                        },
                                        {
                                            "title":"Desupport of Direct File System Placement for OCR and Voting Files",
                                            "href":"desupported-features-oracle-database-12c-r2.html#GUID-2ABD2D83-F627-4BE5-87D8-B46B9CFCE5C7"
                                        },
                                        {
                                            "title":"Desupport of JPublisher",
                                            "href":"desupported-features-oracle-database-12c-r2.html#GUID-12BE00C5-D043-43DE-BCE0-2D3BD400AE29"
                                        },
                                        {
                                            "title":"Desupport of preupgrd.sql and utluppkg.sql",
                                            "href":"desupported-features-oracle-database-12c-r2.html#GUID-A2225651-9CF5-44E6-8DFA-4E331833B8EB"
                                        },
                                        {
                                            "title":"Desupported Oracle Data Provider for .NET APIs for Transaction Guard",
                                            "href":"desupported-features-oracle-database-12c-r2.html#GUID-8852E080-AA79-4A8E-A993-F98981F336E2"
                                        },
                                        {
                                            "title":"Desupported Views in Oracle Database 12c Release 2 (12.2)",
                                            "href":"desupported-features-oracle-database-12c-r2.html#GUID-EAB2EBD9-9DED-48D1-A46A-4B83AEC09B0C"
                                        },
                                        {
                                            "title":"SQLJ Support Inside Oracle Database",
                                            "href":"desupported-features-oracle-database-12c-r2.html#GUID-219C5674-6F2C-4051-A61B-919DA4FF3CB6"
                                        },
                                        {
                                            "title":"Desupport of Some XML DB Features",
                                            "href":"desupported-features-oracle-database-12c-r2.html#GUID-90566882-98BD-4A5A-AC94-A24C69CBE8C4"
                                        }
                                    ]
                                },
                                {
                                    "title":"Database Upgrade Assistant (DBUA) Enhancements and Changes",
                                    "href":"database-upgrade-assistant-dbua-changes.html#GUID-7E8C1213-C1D9-4FDE-8BA4-945C5DDA45E5"
                                },
                                {
                                    "title":"Enhancements to Oracle Data Guard Broker and Rolling Upgrades",
                                    "href":"enhancements-oracle-data-guard-broker-rolling-upgrades.html#GUID-79BAB049-7A0D-42CA-B514-E1BB159486F6"
                                },
                                {
                                    "title":"About Changes in Default SGA Permissions for Oracle Database",
                                    "href":"changes-default-sga-permissions-oracle-database-12c-r2.html#GUID-B588A924-1F76-4536-A476-E8AC9FCB977B"
                                },
                                {
                                    "title":"Network Access Control Lists and Upgrade to Oracle Database 12c",
                                    "href":"network-acl-and-oracle-database-12c-r2-upgrade.html#GUID-A5AEFB4A-2153-44C0-A17A-554AF3D75A91"
                                },
                                {
                                    "title":"Parallel Upgrade Utility Batch Scripts",
                                    "href":"parallel-upgrade-utility-batch-scripts-oracle-database-12c-r2.html#GUID-31050A9E-F9C9-43FC-913F-FFB6D473CFE7"
                                },
                                {
                                    "title":"Unified Auditing AUDIT_ADMIN and AUDIT_VIEWER Roles Changes",
                                    "href":"unified-auditing-audit_admin-audit_viewer-changes.html#GUID-0867243D-4F4B-49B4-A7A5-C5EA98F59172"
                                },
                                {
                                    "title":"Oracle Update Batching Batch Size Settings Disabled",
                                    "href":"oracle-update-batching-batch-size-disabled.html#GUID-82954FA7-2E3B-4E4F-8CC3-11640EC7E2EB"
                                },
                                {
                                    "title":"About Upgrading Tables Dependent on Oracle-Maintained Types",
                                    "href":"user-tables-dependent-oracle-maintained-types-12c-r2.html#GUID-8CCB0CF2-09A6-4B95-8EDA-4E0B515CC6A6"
                                },
                                {
                                    "title":"Case-Insensitive Passwords and ORA-1017 Invalid Username or Password",
                                    "href":"case-insensitive-passwords-ora-1017-invalid-username-password.html#GUID-FDA9C77A-12F4-4410-9448-9BCC13960C27"
                                },
                                {
                                    "title":"About Deploying Oracle Grid Infrastructure Using Rapid Home Provisioning and Maintenance",
                                    "href":"deploy-oracle-grid-infrastructure-using-rapid-home-provisioning.html#GUID-31A09C7F-CC05-4343-8C1A-C99E33B7AFC7"
                                },
                                {
                                    "title":"Restrictions Using Zero Data Loss Recovery Appliance Release 12.1 Backups",
                                    "href":"restrictions-zero-data-loss-recovery-appliance-12-backups.html#GUID-80BA0601-969E-45F3-9AAF-E570B03E7D7D"
                                }
                            ]
                        },
                        {
                            "title":"Behavior Changes in Oracle Database 12c Release 1 (12.1)",
                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-37A0BD91-6133-429A-8506-199DF85B24B4",
                            "topics":[
                                {
                                    "title":"Oracle Database Changes",
                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-26DFE344-2250-4CD4-AEBD-46501196C766",
                                    "topics":[
                                        {
                                            "title":"Deprecation of Non-CDB Architecture",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-1ADC5EB0-E1D7-4098-822C-27BA7B196A61"
                                        },
                                        {
                                            "title":"Deprecation of catupgrd.sql Script and Introduction of Parallel Upgrade Utility",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-18A0714B-2267-4E41-AE79-5AAC3341181B"
                                        },
                                        {
                                            "title":"Error Associated with catupgrd.sql Run Without PARALLEL=NO",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-20588E19-4827-45E7-9D0F-14EB2FFB7898"
                                        },
                                        {
                                            "title":"Desupport of Oracle Enterprise Manager Database Control",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-49CD9539-23D3-40F5-952C-07ED06171C76"
                                        },
                                        {
                                            "title":"Changes for Deinstallation and Cleanup of Oracle Base",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-329FC3BC-6489-4C29-8B93-5F76FCEA3350",
                                            "topics":[
                                                {
                                                    "title":"Change for Standalone Deinstallation Tool",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-D2958223-B26E-4BB3-9FB3-2099ABBD5EE4"
                                                },
                                                {
                                                    "title":"Desupport of CLEANUP_ORACLE_BASE Property",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-2D7DB864-9FC4-4EDF-A560-A8487AB4DEC7"
                                                },
                                                {
                                                    "title":"Deprecation of -cleanupOBase",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-13B12ED3-9B74-451F-8253-184DD5AABA68"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"Identifying and Dropping Deprecated and Desupported Parameters",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-1FAED6A1-DE31-4661-AB28-8691552045D1",
                                            "topics":[
                                                {
                                                    "title":"SEC_CASE_SENSITIVE_LOGON Initialization Parameter Deprecated",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-0B1708A4-BBB6-46A2-AA88-7EA9313A12B2"
                                                },
                                                {
                                                    "title":"FILE_MAPPING Initialization Parameter Deprecated",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-DFF12990-8CB8-4ADF-9DE9-E3F98059B687"
                                                },
                                                {
                                                    "title":"RDBMS_SERVER_DN Initialization Parameter Deprecated",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-9F6850D1-9783-4689-A85D-ECF0525FC255"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"Deprecated Oracle Database Roles",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-CFFD55A5-91A3-4D66-87B2-8A0A6A9CA45D",
                                            "topics":[
                                                {
                                                    "title":"DELETE_CATALOG_ROLE Deprecated",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-2906EFCC-A07C-4B72-87B4-1AF88E3914AF"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"Deprecated Views",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-4C71CFE8-206E-49B8-A4FE-CBBEFFFBCEB3"
                                        },
                                        {
                                            "title":"Deprecation of Oracle Streams",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-F5416032-C530-4194-A7BE-DB7477D4D4BB"
                                        },
                                        {
                                            "title":"Deprecation of Advanced Replication",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-CB9F87A1-EF1C-41B1-8D66-8634F1AB8672"
                                        },
                                        {
                                            "title":"Deprecation of Single-Character SRVCTL CLI Options",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-C6134DD1-6367-42D0-9B6D-6918504825BC"
                                        },
                                        {
                                            "title":"Desupported Features on Microsoft Windows Platforms",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-ED2B3C0B-1323-4C70-83E1-49C2A8A0E19F",
                                            "topics":[
                                                {
                                                    "title":"Desupport of Oracle COM Automation on Windows",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-73A33065-745A-4E6A-94D3-989D594CEF84"
                                                },
                                                {
                                                    "title":"Desupport of Oracle Objects for OLE",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-6F8336CE-A460-46D4-AEA6-09FA9C5F1AAA"
                                                },
                                                {
                                                    "title":"Desupport of Oracle Counters for Windows Performance Monitor",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-75C77D5B-6E9C-4CE4-88C1-3A81CEE2EB80"
                                                },
                                                {
                                                    "title":"Programming Interface Deprecations for Oracle Data Provider for .NET",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-D7E9EA73-6F5F-42C0-9D00-4A7D0A884838"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"Desupport of Oracle Cluster File System (OCFS) on Windows",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-E3E8037B-21CF-4F02-9FAF-132A9A1BA3E7"
                                        },
                                        {
                                            "title":"Desupport for Raw Storage Devices",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-88B9D2E2-BBE9-4F08-949A-5433D0709D55"
                                        },
                                        {
                                            "title":"About Upgrading Oracle Database Release 10.2 or 11.1 and OCFS and RAW Devices",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-E7F7651B-9382-4CA2-BDA2-B019D3807DBA"
                                        },
                                        {
                                            "title":"Desupport of cluvfy comp cfs for OCFS",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-9DC1D3F0-9522-4C35-8EB2-DF0157B6F113"
                                        },
                                        {
                                            "title":"Deprecation of Stored List of Administrative Users for Cluster Administration",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-EADD2894-C39D-4E54-BF25-7FF126F3262B"
                                        },
                                        {
                                            "title":"Deprecation of -checkpasswd for QOSCTL Quality of Service (QoS) Command",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-0C3EC6E7-8B5C-43EF-BB02-07A6828CBC1A"
                                        },
                                        {
                                            "title":"Change to VARCHAR2, NVARCHAR2, and RAW Datatypes",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-A0E976C2-09B7-4D42-B211-FBA533C0B3B2"
                                        },
                                        {
                                            "title":"Oracle JDBC and SQLJ Deprecated and Desupported Features",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-8907D2DF-48D4-4F87-B24D-09E00230F925",
                                            "topics":[
                                                {
                                                    "title":"Deprecation of SQLJ Inside the Server",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-A88D7DF7-F90D-42D2-86E1-F5FA939CCDE2"
                                                },
                                                {
                                                    "title":"Deprecated Oracle Update Batching",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-9F7C8F4A-27A4-4AA4-92B3-902BB8337871"
                                                },
                                                {
                                                    "title":"Deprecated EndToEndMetrics-related APIs",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-0B048DFD-53C9-4B6F-A1F9-9931C35AD9C6"
                                                },
                                                {
                                                    "title":"Deprecated Stored Outlines",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-6120DD88-BF9A-4FB0-BD34-4690C88820CD"
                                                },
                                                {
                                                    "title":"Deprecated Concrete Classes in oracle.sql Package",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-9728DF77-2457-4C29-9FD2-27F07C85DCA2"
                                                },
                                                {
                                                    "title":"Deprecated defineColumnType Method",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-656F15F8-E61C-40BD-9F2F-5049BB922BBB"
                                                },
                                                {
                                                    "title":"Deprecated CONNECTION_PROPERTY_STREAM_CHUNK_SIZE Property",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-74AACFB0-40A4-4DA1-B668-F131EDEA9225"
                                                },
                                                {
                                                    "title":"Desupported Implicit Connection Caching",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-BA2559AC-30A5-4C8C-8C87-BF1098D02DF4"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"Deprecated Features for Oracle Call Interface",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-ADAF8330-4EEF-4D84-81D0-FAC5DDBB1201"
                                        },
                                        {
                                            "title":"Changed Default for RESOURCE_LIMIT Parameter",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-1F4BE309-9750-4C11-84BC-2699D4E6EEE4"
                                        }
                                    ]
                                },
                                {
                                    "title":"Oracle Database Security Changes",
                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-12D70BB4-5437-498E-8324-7256D337B559",
                                    "topics":[
                                        {
                                            "title":"Oracle Business Intelligence and Data Warehousing Changes",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-9B4B7E1E-7E62-4F70-9452-F2217D9DE2B8",
                                            "topics":[
                                                {
                                                    "title":"Oracle Warehouse Builder (OWB) Not Installed with Oracle Database",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-51F28B7E-D4F5-4B69-9A87-7576411AA762"
                                                },
                                                {
                                                    "title":"Desupport of Change Data Capture",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-AF28D790-212D-45DE-B2A1-53DFFBBD5F6D"
                                                },
                                                {
                                                    "title":"Desupported Features in Oracle Data Mining",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-C925C057-99A9-4ABB-922F-B32EDFEAB496"
                                                },
                                                {
                                                    "title":"Desupport of ABN Models for Oracle Data Mining Upgrades",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-C7DB3E44-D55A-41E7-A99B-291DBD71D87D"
                                                },
                                                {
                                                    "title":"Desupport of OLAP Catalog (AMD)",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-AC9CBEC3-FFAF-4D16-A1FE-16E2BB45716E"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"Changes to Security Auditing Features",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-7584E875-B90C-467F-9027-984842867454"
                                        },
                                        {
                                            "title":"Deprecated Functions and Parameters in Oracle Label Security",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-84811F60-35D2-424F-ADDA-A46C5B377034"
                                        },
                                        {
                                            "title":"Deprecated DBMS_NETWORK_ACL_ADMIN PL/SQL package Procedures",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-BA8A93C8-5E7B-4E08-AACD-3B289C74B470"
                                        },
                                        {
                                            "title":"Deprecation of IGNORECASE and SEC_CASE_SENSITIVE_LOGON",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-42D88D4A-8702-4E02-8630-FA14786C187D"
                                        },
                                        {
                                            "title":"Deprecation of SQLNET.ALLOWED_LOGON_VERSION Parameter",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-5EBF6DEA-6A7F-4508-844E-868B204A0F16"
                                        },
                                        {
                                            "title":"Upgrading a System that Did Not Have SQLNET.ALLOWED_LOGON_VERSION Parameter Setting",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-1936C939-F0B7-42B9-8B81-BC69A6D5989D"
                                        },
                                        {
                                            "title":"Deprecation of Windows NTS Authentication Using the NTLM Protocol",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-A81FF729-600A-4E7B-87ED-179740E755E8"
                                        },
                                        {
                                            "title":"Deprecation of Public Key Infrastructure for Transparent Data Encryption",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-C9147741-21F4-44A6-B4FD-B8F89E7D2206"
                                        },
                                        {
                                            "title":"Desupported Cipher Suites for Secure Sockets Layer (SSL)",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-265BCA7E-219C-42B0-B863-BB3D9A48308A"
                                        },
                                        {
                                            "title":"Desupport of Database Rules Manager (RUL) and Expression Filter (EXF)",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-81543CAF-62F8-4561-A2D0-CD11069F9F5B"
                                        },
                                        {
                                            "title":"Oracle Data Guard Broker Deprecated or Desupported Features",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-1615751E-B9B1-4C25-BB27-10559DB3545A"
                                        },
                                        {
                                            "title":"Oracle Data Pump Export Utility Deprecated or Desupported Features",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-26FE7600-F17F-4596-9ABE-C05524E48DE6"
                                        },
                                        {
                                            "title":"Oracle Database Vault Deprecated or Desupported Features",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-C08EF377-BB49-4BDE-9465-CAAB6694A798",
                                            "topics":[
                                                {
                                                    "title":"Deprecated Default Rule Sets for Oracle Database Vault",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-02439AFA-09A5-4BD0-ADE9-832A5CC4C2E3"
                                                },
                                                {
                                                    "title":"Deprecated Default Realms for Oracle Database Vault",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-B38F4AC7-A84A-4F67-970B-C3C9EF4869B3"
                                                },
                                                {
                                                    "title":"Deprecated API for Oracle Database Vault",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-2502BB0C-9C9C-4074-84C9-17A40E54D145"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"Oracle Database Semantic Technologies Deprecated or Desupported Features",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-480FBB76-3DB9-4D11-BB11-BD630E8806CD",
                                            "topics":[
                                                {
                                                    "title":"VPD Support in Oracle Database Semantic Technologies",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-922FD3D5-ED78-4A81-9D38-5BC669530EDB"
                                                },
                                                {
                                                    "title":"Version-Enabled Models Support In Oracle Database Semantic Technologies",
                                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-E5CFEAF1-172F-49C8-9260-11D254C9C086"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"Oracle Globalization Support Deprecated or Desupported Features",
                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-E3D08FF1-E412-4A8D-BC72-7F7C5A209133",
                                    "topics":[
                                        {
                                            "title":"Desupport of CSSCAN and CSALTER for Oracle Globalization",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-CB057711-4330-49DB-92BC-EE0E032A3F6C"
                                        }
                                    ]
                                },
                                {
                                    "title":"Oracle Multimedia Deprecated or Desupported Features",
                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-7C07C499-8EC0-4A06-BD90-3E0049E9A17A"
                                },
                                {
                                    "title":"Oracle Net Services Deprecated or Desupported Features",
                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-B1952593-1B41-45E6-9A96-7C7898FB3DD6",
                                    "topics":[
                                        {
                                            "title":"Desupport of Oracle Net Connection Pooling",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-666AB418-03D4-4AF9-ACC3-B35CC9D10644"
                                        },
                                        {
                                            "title":"Desupport of Oracle Names",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-371CE899-19F4-432F-8770-C4A1AFD9A63D"
                                        },
                                        {
                                            "title":"Desupport of Oracle Net Listener Password",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-152C793F-5F06-4CCB-8671-67DBF240C133"
                                        },
                                        {
                                            "title":"Desupport of SQLNET.KERBEROS5_CONF_MIT Parameter for Oracle Net Services",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-210B0CA1-549F-49C7-AFFF-800B940ECA1B"
                                        },
                                        {
                                            "title":"Desupport of Oracle Names Control Utility for Oracle Net Services",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-5E0CCC6B-00E8-4796-83A0-2715439B2E07"
                                        },
                                        {
                                            "title":"Deprecated NT LAN Manager (NTLM) Protocol for Oracle Net Services",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-E4B22DA8-DDC7-40F2-BC65-77761E396288"
                                        }
                                    ]
                                },
                                {
                                    "title":"Oracle Text Deprecated and Desupported Features",
                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-9ED951E4-117B-4ECD-B2D9-95051824BAFA",
                                    "topics":[
                                        {
                                            "title":"Desupport of CTXXPATH in Oracle Text and Oracle XML DB",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-67523AD0-8602-4891-93C1-58231549D3EB"
                                        },
                                        {
                                            "title":"Desupport of ALTER INDEX OPTIMIZE for Text Indexes",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-11FE5365-FF96-4CA4-A128-CD1112DFFE18"
                                        },
                                        {
                                            "title":"Desupport of SYNC [MEMORY memsize] for Text Indexes",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-332A970B-AF8A-4F58-B20B-4CE79FDA80FC"
                                        }
                                    ]
                                },
                                {
                                    "title":"Oracle XML Database Changes",
                                    "href":"behavior-changes-oracle-database-12c-121.html#GUID-D9C3762B-CDB4-49AA-A44E-67E03AA1E73F",
                                    "topics":[
                                        {
                                            "title":"Oracle XML DB is Mandatory and Cannot Be Uninstalled",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-F38855B7-12F0-4477-8612-B034DAA6298F"
                                        },
                                        {
                                            "title":"Deprecated Features for Oracle XML Database",
                                            "href":"behavior-changes-oracle-database-12c-121.html#GUID-67CA8622-1F7A-4646-BD30-3C4475DD6949"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">B </span> Oracle Database Upgrade Utilities",
                    "href":"oracle-database-upgrade-utilities.html#GUID-408F22C3-2AD6-4DA4-8015-F5C6149508F0",
                    "topics":[
                        {
                            "title":"Scripts for Upgrading Oracle Database",
                            "href":"oracle-database-upgrade-utilities.html#GUID-7935BC31-8818-4757-A6E7-A180C3E95A62"
                        }
                    ]
                },
                {
                    "title":"Index",
                    "href":"book-index.html"
                }
            ]
        }
    ]
});