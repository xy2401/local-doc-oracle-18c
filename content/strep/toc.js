define(
{
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
                {
                    "title":"Title and Copyright Information",
                    "href":"index.html"
                },
                {
                    "title":"Preface",
                    "href":"preface.html#GUID-7D81BFF5-C0C2-4319-9E86-914D33DF8C23",
                    "topics":[
                        {
                            "title":"Audience",
                            "href":"preface.html#GUID-7D94256A-1423-4D2D-BC65-B6BB49C05DFC"
                        },
                        {
                            "title":"Documentation Accessibility",
                            "href":"preface.html#GUID-E409CC44-9A8F-4043-82C8-6B95CD939296"
                        },
                        {
                            "title":"Related Documents",
                            "href":"preface.html#GUID-1529BE59-F475-4EFF-98DA-E9E272D2467C"
                        },
                        {
                            "title":"Conventions",
                            "href":"preface.html#GUID-9A159ACC-BDF8-471D-8CA4-95AAF3A0DBAD"
                        }
                    ]
                },
                {
                    "title":"Changes for Oracle Streams Replication Administrator's Guide",
                    "href":"release-changes.html#GUID-B10D54D1-D46B-4FA3-8F1F-4D7450958DD8",
                    "topics":[
                        {
                            "title":"Changes in Oracle Database 12c Release 1 (12.1)",
                            "href":"release-changes.html#GUID-9BB61F7E-BB1A-4724-B64D-8FD118FEF0C4",
                            "topics":[
                                {
                                    "title":"Deprecated Features",
                                    "href":"release-changes.html#GUID-B093E67E-7765-4A1F-B316-F8E322D77180"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part I Configuring Oracle Streams Replication",
                    "href":"configuring-oracle-streams-replication.html",
                    "topics":[
                        {
                            "title":"1 Preparing for Oracle Streams Replication",
                            "href":"preparing-for-oracle-streams-replication.html#GUID-9110C1DA-8450-42A5-BA4B-2C0117DB8BFC",
                            "topics":[
                                {
                                    "title":"1.1 Overview of Oracle Streams Replication",
                                    "href":"preparing-for-oracle-streams-replication.html#GUID-B8B82178-BD45-4499-B40A-8286CFEC5840",
                                    "topics":[
                                        {
                                            "title":"1.1.1 Common Reasons to Use Oracle Streams Replication",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-8476277E-1966-4815-9E5E-DBEBEFD0B86D"
                                        },
                                        {
                                            "title":"1.1.2 Rules in an Oracle Streams Replication Environment",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-9E0F6877-1EDC-42B1-B028-117393411EEE"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.2 Decisions to Make Before Configuring Oracle Streams Replication",
                                    "href":"preparing-for-oracle-streams-replication.html#GUID-C32C3F56-49EF-4964-A984-9CB220DCB5B3",
                                    "topics":[
                                        {
                                            "title":"1.2.1 Decide Which Type of Replication Environment to Configure",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-9EBD9C47-B328-4740-B1CA-3066B5A9EFD6",
                                            "topics":[
                                                {
                                                    "title":"1.2.1.1 About Two-Database Replication Environments",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-8B88B2DD-BECD-4D90-8C83-E3A95DD2117F"
                                                },
                                                {
                                                    "title":"1.2.1.2 About Hub-And-Spoke Replication Environments",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-73C17827-8380-4F88-9FA4-F0CBE866D519"
                                                },
                                                {
                                                    "title":"1.2.1.3 About N-Way Replication Environments",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-A2D46E06-F150-4FED-8BAC-C4D64D1962DE"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"1.2.2 Decide Whether to Configure Local or Downstream Capture for the Source Database",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-413B5DE9-FB2A-48BE-B5A0-815DE614E502"
                                        },
                                        {
                                            "title":"1.2.3 Decide Whether Changes Are Allowed at One Database or at Multiple Databases",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-F691796A-514C-4821-8B7B-BAB0FA45C04E"
                                        },
                                        {
                                            "title":"1.2.4 Decide Whether the Replication Environment Will Have Nonidentical Replicas",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-B51FFB8D-AB92-4B36-9648-F58262282F9B"
                                        },
                                        {
                                            "title":"1.2.5 Decide Whether the Replication Environment Will Use Apply Handlers",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-7078844B-E2BE-48F5-8117-69B4F999FA73"
                                        },
                                        {
                                            "title":"1.2.6 Decide Whether to Maintain DDL Changes",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-A9E8F02F-F101-4A22-A252-C6A9DC400CE8"
                                        },
                                        {
                                            "title":"1.2.7 Decide How to Configure the Replication Environment",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-0C7BB255-A828-4089-B624-41201F1E18D0"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.3 Tasks to Complete Before Configuring Oracle Streams Replication",
                                    "href":"preparing-for-oracle-streams-replication.html#GUID-BB2E76CA-3645-4469-8750-4B276B8A955B",
                                    "topics":[
                                        {
                                            "title":"1.3.1 Configuring an Oracle Streams Administrator on All Databases",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-EF5A403D-42E5-426D-B654-456E634F53B0"
                                        },
                                        {
                                            "title":"1.3.2 Configuring Network Connectivity and Database Links",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-7867112D-DAC3-4693-811E-B1B1052C7847"
                                        },
                                        {
                                            "title":"1.3.3 Ensuring That Each Source Database Is In ARCHIVELOG Mode",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-93BE3DA2-24EC-491A-811C-E32FD80D7809"
                                        },
                                        {
                                            "title":"1.3.4 Setting Initialization Parameters Relevant to Oracle Streams",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-F16B954D-35E0-422C-A89F-D3E170BD4505"
                                        },
                                        {
                                            "title":"1.3.5 Configuring the Oracle Streams Pool",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-E572258F-DEB4-4B0B-B29B-D196C7336112",
                                            "topics":[
                                                {
                                                    "title":"1.3.5.1 Using Automatic Memory Management to Set the Oracle Streams Pool Size",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-0071A887-A334-4CE9-AA4F-3F730E117297"
                                                },
                                                {
                                                    "title":"1.3.5.2 Using Automatic Shared Memory Management to Set the Oracle Streams Pool Size",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-E65D47CB-DA8C-46FC-8AB9-9E0975C0105F"
                                                },
                                                {
                                                    "title":"1.3.5.3 Setting the Oracle Streams Pool Size Manually",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-6A752003-766E-405C-BC9E-B3109F57D117"
                                                },
                                                {
                                                    "title":"1.3.5.4 Using the Default Setting for the Oracle Streams Pool Size",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-CCB97B57-4CF2-4CF5-B01B-5E0702F4FE96"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"1.3.6 Specifying Supplemental Logging",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-12A4DC82-EEC7-4ACC-BF8F-8D82AA1D19DE",
                                            "topics":[
                                                {
                                                    "title":"1.3.6.1 Required Supplemental Logging in an Oracle Streams Replication Environment",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-0CCB5C86-41A8-4575-B4E6-66658D9E2DAA"
                                                },
                                                {
                                                    "title":"1.3.6.2 Specifying Table Supplemental Logging Using Unconditional Log Groups",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-D0218F0D-4000-4E07-8873-4101913F7F63",
                                                    "topics":[
                                                        {
                                                            "title":"1.3.6.2.1 Specifying an Unconditional Supplemental Log Group for Primary Key Column(s)",
                                                            "href":"preparing-for-oracle-streams-replication.html#GUID-5D0D75DD-1538-4BF3-830B-065808656AC4"
                                                        },
                                                        {
                                                            "title":"1.3.6.2.2 Specifying an Unconditional Supplemental Log Group for All Table Columns",
                                                            "href":"preparing-for-oracle-streams-replication.html#GUID-78C196CA-9D20-4BD8-A7EA-7FFB216AA2B2"
                                                        },
                                                        {
                                                            "title":"1.3.6.2.3 Specifying an Unconditional Supplemental Log Group that Includes Selected Columns",
                                                            "href":"preparing-for-oracle-streams-replication.html#GUID-AE36033C-A250-433A-9A49-30FCAEA075FB"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"1.3.6.3 Specifying Table Supplemental Logging Using Conditional Log Groups",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-98BE22A4-3DC0-42ED-971A-1591E999EF19",
                                                    "topics":[
                                                        {
                                                            "title":"1.3.6.3.1 Specifying a Conditional Log Group Using the ADD SUPPLEMENTAL LOG DATA Clause",
                                                            "href":"preparing-for-oracle-streams-replication.html#GUID-BF1A7FA1-A778-4D76-8405-0D04C298FF65"
                                                        },
                                                        {
                                                            "title":"1.3.6.3.2 Specifying a Conditional Log Group Using the ADD SUPPLEMENTAL LOG GROUP Clause",
                                                            "href":"preparing-for-oracle-streams-replication.html#GUID-1939F15B-87BE-456E-AAA7-66D3C2714C08"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"1.3.6.4 Dropping a Supplemental Log Group",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-DA2860FB-322B-41AA-B318-13F4DB2EB992"
                                                },
                                                {
                                                    "title":"1.3.6.5 Specifying Database Supplemental Logging of Key Columns",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-739603CA-A024-4391-A1AA-A3C58CAF4AFA"
                                                },
                                                {
                                                    "title":"1.3.6.6 Dropping Database Supplemental Logging of Key Columns",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-83808654-387F-46C7-A811-07C12EDB4171"
                                                },
                                                {
                                                    "title":"1.3.6.7 Procedures That Automatically Specify Supplemental Logging",
                                                    "href":"preparing-for-oracle-streams-replication.html#GUID-C448DF14-14D0-45FE-9D29-ECBFFF4FB255"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"1.3.7 Configuring Log File Transfer to a Downstream Capture Database",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-CD6DB455-4D52-4CEF-B680-5A324E36BC5A"
                                        },
                                        {
                                            "title":"1.3.8 Adding Standby Redo Logs for Real-Time Downstream Capture",
                                            "href":"preparing-for-oracle-streams-replication.html#GUID-4330E6AC-490D-438C-8A9D-D49DC7321BEE"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"2 Simple Oracle Streams Replication Configuration",
                            "href":"simple-oracle-streams-replication-configuration.html#GUID-19643DBA-4776-4A74-BC66-1979E6903E0A",
                            "topics":[
                                {
                                    "title":"2.1 Configuring Replication Using the Setup Streams Replication Wizard",
                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-0C365820-9DCF-4234-B4F2-20DFA29E9E22"
                                },
                                {
                                    "title":"2.2 Configuring Replication Using the DBMS_STREAMS_ADM Package",
                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-8FAAAEF7-0689-4A95-8BD4-D8630CE45FD5",
                                    "topics":[
                                        {
                                            "title":"2.2.1 The Oracle Streams Replication Configuration Procedures",
                                            "href":"simple-oracle-streams-replication-configuration.html#GUID-0EC0845E-D1C1-4F79-A6DB-D0DE62564F57"
                                        },
                                        {
                                            "title":"2.2.2 Important Considerations for the Configuration Procedures",
                                            "href":"simple-oracle-streams-replication-configuration.html#GUID-B1820CB1-2358-49B4-A02F-F8B74949338C",
                                            "topics":[
                                                {
                                                    "title":"2.2.2.1 Local or Downstream Capture for the Source Database",
                                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-5D6659BD-CADE-42B0-87D8-F3A44B11A9F7"
                                                },
                                                {
                                                    "title":"2.2.2.2 Perform Configuration Actions Directly or With a Script",
                                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-D784A5C1-CF24-45B9-A372-0DDE4D57E804"
                                                },
                                                {
                                                    "title":"2.2.2.3 Oracle Streams Components Configured by These Procedures",
                                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-8F719EEC-0848-41AF-AA04-3073E8AEBE33"
                                                },
                                                {
                                                    "title":"2.2.2.4 One-Way or Bi-Directional Replication",
                                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-3BC4A108-17E7-481C-B309-683B2FEB172E",
                                                    "topics":[
                                                        {
                                                            "title":"2.2.2.4.1 Change Cycling and Tags",
                                                            "href":"simple-oracle-streams-replication-configuration.html#GUID-AD9A0588-A09F-422C-8C84-A2C1AA187A37"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"2.2.2.5 Data Definition Language (DDL) Changes",
                                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-6873B325-4D12-460E-9565-4B0B0C29DEE0"
                                                },
                                                {
                                                    "title":"2.2.2.6 Instantiation",
                                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-0249E6A9-33CE-4729-8020-2D4E6D85DBBB"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"2.2.3 Creating the Required Directory Objects",
                                            "href":"simple-oracle-streams-replication-configuration.html#GUID-6D874F68-7DE5-4987-8AEC-B0099BF3ED26"
                                        },
                                        {
                                            "title":"2.2.4 Examples That Configure Two-Database Replication with Local Capture",
                                            "href":"simple-oracle-streams-replication-configuration.html#GUID-F4C7F1FC-ED63-4D01-B2AC-51F116482903",
                                            "topics":[
                                                {
                                                    "title":"2.2.4.1 Configuring Two-Database Global Replication with Local Capture",
                                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-55241DE7-C460-4069-A75A-4B898543E3DC"
                                                },
                                                {
                                                    "title":"2.2.4.2 Configuring Two-Database Schema Replication with Local Capture",
                                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-D5D0E352-A3B0-4E39-8788-4ED78DB954D7"
                                                },
                                                {
                                                    "title":"2.2.4.3 Configuring Two-Database Table Replication with Local Capture",
                                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-8B059D8D-E68A-44C9-AEBE-597FEEB488EC"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"2.2.5 Examples That Configure Two-Database Replication with Downstream Capture",
                                            "href":"simple-oracle-streams-replication-configuration.html#GUID-F2027D09-D92B-4975-A5CA-4E258AF7B4CC",
                                            "topics":[
                                                {
                                                    "title":"2.2.5.1 Configuring Tablespace Replication with Downstream Capture at Destination",
                                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-000236AE-CD25-4ED8-BA07-E9D545C5A17D"
                                                },
                                                {
                                                    "title":"2.2.5.2 Configuring Schema Replication with Downstream Capture at Destination",
                                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-C871DAC3-F840-48DC-83C4-EA11CE4A220D"
                                                },
                                                {
                                                    "title":"2.2.5.3 Configuring Schema Replication with Downstream Capture at Third Database",
                                                    "href":"simple-oracle-streams-replication-configuration.html#GUID-59E31770-9AA5-41E1-B1EB-CA92ADA85E6C"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"2.2.6 Example That Configures Two-Database Replication with Synchronous Captures",
                                            "href":"simple-oracle-streams-replication-configuration.html#GUID-DE04AAC0-800A-4F94-89C2-80560B32B6AD"
                                        },
                                        {
                                            "title":"2.2.7 Example That Configures Hub-and-Spoke Replication",
                                            "href":"simple-oracle-streams-replication-configuration.html#GUID-91D2F532-471A-493D-83F5-D2B0F1C34848"
                                        },
                                        {
                                            "title":"2.2.8 Monitoring Oracle Streams Configuration Progress",
                                            "href":"simple-oracle-streams-replication-configuration.html#GUID-7E1E55C3-95FA-4C6C-94B4-2F16E949D67E"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"3 Flexible Oracle Streams Replication Configuration",
                            "href":"flexible-oracle-streams-replication-configuration.html#GUID-3945B3B9-4EC3-47A0-A095-FB1F80CE5683",
                            "topics":[
                                {
                                    "title":"3.1 Creating a New Oracle Streams Single-Source Environment",
                                    "href":"flexible-oracle-streams-replication-configuration.html#GUID-7CF7EED7-C485-432E-9B4A-1A29E5D3ACEB"
                                },
                                {
                                    "title":"3.2 Creating a New Oracle Streams Multiple-Source Environment",
                                    "href":"flexible-oracle-streams-replication-configuration.html#GUID-17BF2C11-3D6E-4915-B19A-13D1AD4CB440",
                                    "topics":[
                                        {
                                            "title":"3.2.1 Configuring Populated Databases When Creating a Multiple-Source Environment",
                                            "href":"flexible-oracle-streams-replication-configuration.html#GUID-382292F3-BEEC-455D-AE85-CA3E48B71118"
                                        },
                                        {
                                            "title":"3.2.2 Adding Replicated Objects to Import Databases When Creating a New Environment",
                                            "href":"flexible-oracle-streams-replication-configuration.html#GUID-93D67B4A-1635-4270-AB83-DADC0607A8A5"
                                        },
                                        {
                                            "title":"3.2.3 Complete the Multiple-Source Environment Configuration",
                                            "href":"flexible-oracle-streams-replication-configuration.html#GUID-356BFFD5-8FE0-4842-9523-453FB6CEA91E"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"4 Adding to an Oracle Streams Replication Environment",
                            "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-2A81F5DD-EAF9-4670-BD1F-C4D3C555C344",
                            "topics":[
                                {
                                    "title":"4.1 About Adding to an Oracle Streams Replication Environment",
                                    "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-D483292F-A3E1-44BA-A49C-6D1027019D87",
                                    "topics":[
                                        {
                                            "title":"4.1.1 About Using the Setup Streams Replication Wizard or a Single Configuration Procedure",
                                            "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-822A7BD7-0DEF-4674-9968-7C8E6D035E63"
                                        },
                                        {
                                            "title":"4.1.2 About Adding the Oracle Streams Components Individually in Multiple Steps",
                                            "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-7442BD31-E20C-4816-A28E-81D212238BCB"
                                        }
                                    ]
                                },
                                {
                                    "title":"4.2 Adding Multiple Components Using a Single Procedure",
                                    "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-739C6E78-65A2-45DE-A564-3C65E2F36D3A",
                                    "topics":[
                                        {
                                            "title":"4.2.1 Adding Database Objects to a Replication Environment Using a Single Procedure",
                                            "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-CCDEB975-C546-45D1-B243-61AF8FF7C761"
                                        },
                                        {
                                            "title":"4.2.2 Adding a Database to a Replication Environment Using a Single Procedure",
                                            "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-0EB93CD5-A75B-4B6D-80F5-C9E314AAD161"
                                        }
                                    ]
                                },
                                {
                                    "title":"4.3 Adding Components Individually in Multiple Steps",
                                    "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-C3B523BC-8E8B-4319-A29A-4DBA385C6457",
                                    "topics":[
                                        {
                                            "title":"4.3.1 Adding Replicated Objects to an Existing Single-Source Environment",
                                            "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-5D507278-DDF4-4011-B188-52ED40B7E245"
                                        },
                                        {
                                            "title":"4.3.2 Adding a New Destination Database to a Single-Source Environment",
                                            "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-E14B5D73-857A-42BC-B0C2-4DFBCAF7D65E"
                                        },
                                        {
                                            "title":"4.3.3 Adding Replicated Objects to an Existing Multiple-Source Environment",
                                            "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-C90A7979-FCAE-4D63-BF18-2F7C2EEF7266",
                                            "topics":[
                                                {
                                                    "title":"4.3.3.1 Configuring Populated Databases When Adding Replicated Objects",
                                                    "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-62BBF518-3183-4CDF-B018-8CE4E920537E"
                                                },
                                                {
                                                    "title":"4.3.3.2 Adding Replicated Objects to Import Databases in an Existing Environment",
                                                    "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-AEA628AD-4C17-41D4-98EA-2F165C2B1D3B"
                                                },
                                                {
                                                    "title":"4.3.3.3 Finish Adding Objects to a Multiple-Source Environment Configuration",
                                                    "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-2DB10CD6-103A-42A8-82AB-4A64DA529358"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"4.3.4 Adding a New Database to an Existing Multiple-Source Environment",
                                            "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-1F59FF2A-F015-4A9F-B006-C812ADE140B7",
                                            "topics":[
                                                {
                                                    "title":"4.3.4.1 Configuring Databases If the Replicated Objects Already Exist at the New Database",
                                                    "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-0276A1B4-0912-478D-986B-B076FD69BC08"
                                                },
                                                {
                                                    "title":"4.3.4.2 Adding Replicated Objects to a New Database",
                                                    "href":"adding-to-an-oracle-streams-replication-environment.html#GUID-D1026AD9-2EA7-4912-9D60-E9AB00EC64ED"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"5 Configuring Implicit Capture",
                            "href":"configuring-implicit-capture.html#GUID-7EFBBD88-3B31-4F13-B62D-6F9761336C22",
                            "topics":[
                                {
                                    "title":"5.1 Configuring a Capture Process",
                                    "href":"configuring-implicit-capture.html#GUID-7E8A69CC-8B44-4F51-AE7E-E812035BC54B",
                                    "topics":[
                                        {
                                            "title":"5.1.1 Preparing to Configure a Capture Process",
                                            "href":"configuring-implicit-capture.html#GUID-9B62501C-538F-4359-91B7-65910445C900"
                                        },
                                        {
                                            "title":"5.1.2 Configuring a Local Capture Process",
                                            "href":"configuring-implicit-capture.html#GUID-85140369-6451-416C-ABD2-E16A80198F7D",
                                            "topics":[
                                                {
                                                    "title":"5.1.2.1 Configuring a Local Capture Process Using DBMS_STREAMS_ADM",
                                                    "href":"configuring-implicit-capture.html#GUID-C245E379-D914-4E09-AF29-52704B776A08"
                                                },
                                                {
                                                    "title":"5.1.2.2 Configuring a Local Capture Process Using DBMS_CAPTURE_ADM",
                                                    "href":"configuring-implicit-capture.html#GUID-D413BFB6-0EED-4929-8F39-1BA3C1070486"
                                                },
                                                {
                                                    "title":"5.1.2.3 Configuring a Local Capture Process with Non-NULL Start SCN",
                                                    "href":"configuring-implicit-capture.html#GUID-D4FA1FF4-2A22-437F-82BB-EDFF37C3E9D6"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"5.1.3 Configuring a Downstream Capture Process",
                                            "href":"configuring-implicit-capture.html#GUID-866E5607-FF31-4C42-BEF0-18BE14AECA50",
                                            "topics":[
                                                {
                                                    "title":"5.1.3.1 Configuring a Real-Time Downstream Capture Process",
                                                    "href":"configuring-implicit-capture.html#GUID-63942532-D305-4586-80FC-CC754FD37A93"
                                                },
                                                {
                                                    "title":"5.1.3.2 Configuring an Archived-Log Downstream Capture Process",
                                                    "href":"configuring-implicit-capture.html#GUID-B3AC0900-A3B1-42A1-BE6F-A623F223835F",
                                                    "topics":[
                                                        {
                                                            "title":"5.1.3.2.1 Configuring an Archived-Log Downstream Capture Process that Assigns Logs Implicitly",
                                                            "href":"configuring-implicit-capture.html#GUID-F746E948-84AF-460C-968A-4D151C6011F9"
                                                        },
                                                        {
                                                            "title":"5.1.3.2.2 Configuring an Archived-Log Downstream Capture Process that Assigns Logs Explicitly",
                                                            "href":"configuring-implicit-capture.html#GUID-703A6E9E-C777-4198-ABEC-82A243C1F272"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "title":"5.1.4 After Configuring a Capture Process",
                                            "href":"configuring-implicit-capture.html#GUID-01104DA5-5B41-4A63-84EA-94D93A345189"
                                        }
                                    ]
                                },
                                {
                                    "title":"5.2 Configuring Synchronous Capture",
                                    "href":"configuring-implicit-capture.html#GUID-30D89F9D-C7E3-48FE-BF78-0CB98B983BB5",
                                    "topics":[
                                        {
                                            "title":"5.2.1 Preparing to Configure a Synchronous Capture",
                                            "href":"configuring-implicit-capture.html#GUID-D391FA10-EA15-4EA1-BCF5-EF74461F2AAA"
                                        },
                                        {
                                            "title":"5.2.2 Configuring a Synchronous Capture Using the DBMS_STREAMS_ADM Package",
                                            "href":"configuring-implicit-capture.html#GUID-03490276-ABDE-4D37-92C8-29C5DA470DFB"
                                        },
                                        {
                                            "title":"5.2.3 Configuring a Synchronous Capture Using the DBMS_CAPTURE_ADM Package",
                                            "href":"configuring-implicit-capture.html#GUID-30689295-4926-4FB4-A37D-ABE1D6FE1091"
                                        },
                                        {
                                            "title":"5.2.4 After Configuring a Synchronous Capture",
                                            "href":"configuring-implicit-capture.html#GUID-D448ED74-F3A0-43E8-A673-F26FB15AA4A6"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"6 Configuring Queues and Propagations",
                            "href":"configuring-queues-and-propagations.html#GUID-5D660DC8-BDB5-4BA3-9A14-1ADBBBC53868",
                            "topics":[
                                {
                                    "title":"6.1 Creating an ANYDATA Queue",
                                    "href":"configuring-queues-and-propagations.html#GUID-ACF52296-CE1F-40E1-B63E-5A6EB6A284A1"
                                },
                                {
                                    "title":"6.2 Creating Oracle Streams Propagations Between ANYDATA Queues",
                                    "href":"configuring-queues-and-propagations.html#GUID-15AAD2ED-F1AD-465D-A8B4-897F73EE45C9",
                                    "topics":[
                                        {
                                            "title":"6.2.1 Preparing to Create a Propagation",
                                            "href":"configuring-queues-and-propagations.html#GUID-47E0D14B-C043-4D2A-9AA9-AE2AEDA50B37"
                                        },
                                        {
                                            "title":"6.2.2 Creating a Propagation Using DBMS_STREAMS_ADM",
                                            "href":"configuring-queues-and-propagations.html#GUID-A3829CA1-570A-40DA-8207-4D053CCC5703"
                                        },
                                        {
                                            "title":"6.2.3 Creating a Propagation Using DBMS_PROPAGATION_ADM",
                                            "href":"configuring-queues-and-propagations.html#GUID-04326289-993F-427E-BA9A-6AEEF626C8F0"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"7 Configuring Implicit Apply",
                            "href":"configuring-implicit-apply.html#GUID-7D393976-B22F-4CF1-901E-62451DEB64DB",
                            "topics":[
                                {
                                    "title":"7.1 Overview of Apply Process Creation",
                                    "href":"configuring-implicit-apply.html#GUID-34561C49-0522-4FC8-8C13-CE963F16D3B8"
                                },
                                {
                                    "title":"7.2 Preparing to Create an Apply Process",
                                    "href":"configuring-implicit-apply.html#GUID-A9D41FE9-120E-4A5C-9898-90E08AE8062A"
                                },
                                {
                                    "title":"7.3 Creating an Apply Process for Captured LCRs Using DBMS_STREAMS_ADM",
                                    "href":"configuring-implicit-apply.html#GUID-1B692D38-FEC4-4D92-A745-DD33A0654BFA"
                                },
                                {
                                    "title":"7.4 Creating an Apply Process Using DBMS_APPLY_ADM",
                                    "href":"configuring-implicit-apply.html#GUID-028FFC4C-26CB-4CB7-B3F7-A515877B5BAE",
                                    "topics":[
                                        {
                                            "title":"7.4.1 Creating an Apply Process for Captured LCRs with DBMS_APPLY_ADM",
                                            "href":"configuring-implicit-apply.html#GUID-E2520EF7-74F0-4634-BF4E-C37AACAF5C0B"
                                        },
                                        {
                                            "title":"7.4.2 Creating an Apply Process for Persistent LCRs with DBMS_APPLY_ADM",
                                            "href":"configuring-implicit-apply.html#GUID-B01D8417-45F3-443A-B9F7-B8BB5FF3F2A8"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"8 Instantiation and Oracle Streams Replication",
                            "href":"instantiation-and-oracle-streams-replication.html#GUID-003967CE-08B9-439C-902F-45E7B7C37371",
                            "topics":[
                                {
                                    "title":"8.1 Overview of Instantiation and Oracle Streams Replication",
                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-5152A86B-0B25-44B7-A857-DBE83CAA509A"
                                },
                                {
                                    "title":"8.2 Capture Rules and Preparation for Instantiation",
                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-49D5B599-16A8-40EB-8A2A-D4425F13682A",
                                    "topics":[
                                        {
                                            "title":"8.2.1 DBMS_STREAMS_ADM Package Procedures Automatically Prepare Objects",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-A067A70F-CAAD-4942-80A6-BDD6C66BD2EB"
                                        },
                                        {
                                            "title":"8.2.2 When Preparing for Instantiation Is Required",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-8ABC5383-D6BC-4977-A20A-F2B4C4B88EC5"
                                        },
                                        {
                                            "title":"8.2.3 Supplemental Logging Options During Preparation for Instantiation",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-44EF379E-1332-48B7-9223-02F07D168EDB"
                                        },
                                        {
                                            "title":"8.2.4 Preparing Database Objects for Instantiation at a Source Database",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-CBDA09E8-D2E0-4E56-B7A7-E87BDC26FC5A",
                                            "topics":[
                                                {
                                                    "title":"8.2.4.1 Preparing Tables for Instantiation",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-19FC31D5-2654-45E6-9EC5-B5828BF47526",
                                                    "topics":[
                                                        {
                                                            "title":"8.2.4.1.1 Preparing a Table for Instantiation Using DBMS_STREAMS_ADM When a Capture Process Is Used",
                                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-1920512C-89D4-405C-8839-AC939E83BEFA"
                                                        },
                                                        {
                                                            "title":"8.2.4.1.2 Preparing a Table for Instantiation Using DBMS_CAPTURE_ADM When a Capture Process Is Used",
                                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-7E208F15-0248-4BCB-8BD9-31C27AC06D3B"
                                                        },
                                                        {
                                                            "title":"8.2.4.1.3 Preparing Tables for Instantiation Using DBMS_STREAMS_ADM When a Synchronous Capture Is Used",
                                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-916388AC-A793-4860-8202-E81094727288"
                                                        },
                                                        {
                                                            "title":"8.2.4.1.4 Preparing Tables for Instantiation Using DBMS_CAPTURE_ADM When a Synchronous Capture Is Used",
                                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-80584FAA-B0F3-4CD7-ABD8-6EF1C12CEFE1"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"8.2.4.2 Preparing the Database Objects in a Schema for Instantiation",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-6225F720-A593-432E-90B1-020AA2094FA7",
                                                    "topics":[
                                                        {
                                                            "title":"8.2.4.2.1 Preparing the Database Objects in a Schema for Instantiation Using DBMS_STREAMS_ADM",
                                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-D40F624E-24C6-4D6A-82F0-1B90507C5875",
                                                            "topics":[
                                                                {
                                                                    "title":"8.2.4.2.1.1 Preparing the Database Objects in a Schema for Instantiation Using DBMS_CAPTURE_ADM",
                                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-EE0A6C2A-2D6F-405B-9A9D-B5F72E123610"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"8.2.4.3 Preparing All of the Database Objects in a Database for Instantiation",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-6832412C-9F6C-4345-A32B-424B9E38C284",
                                                    "topics":[
                                                        {
                                                            "title":"8.2.4.3.1 Preparing All of the Database Objects in a Database for Instantiation Using DBMS_STREAMS_ADM",
                                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-FBBC31BD-BC63-47E6-AA0E-D174EEAB667D",
                                                            "topics":[
                                                                {
                                                                    "title":"8.2.4.3.1.1 Preparing All of the Database Objects in a Database for Instantiation Using DBMS_CAPTURE_ADM",
                                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-CCCC5CA8-D050-4ED1-AC17-49F96A869B19"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "title":"8.2.5 Aborting Preparation for Instantiation at a Source Database",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-207E8687-3B93-4782-80A3-92CD9B36947B"
                                        }
                                    ]
                                },
                                {
                                    "title":"8.3 Oracle Data Pump and Oracle Streams Instantiation",
                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-AAB63D95-9728-4142-BB75-83356AE7C899",
                                    "topics":[
                                        {
                                            "title":"8.3.1 Data Pump Export and Object Consistency",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-99C34F9A-E584-495C-9CC2-05905C9BCDBE"
                                        },
                                        {
                                            "title":"8.3.2 Oracle Data Pump Import and Oracle Streams Instantiation",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-EA661384-A2B7-4A21-A98D-400DFC020F9C",
                                            "topics":[
                                                {
                                                    "title":"8.3.2.1 Instantiation SCNs and Data Pump Imports",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-C7163320-AD7E-4957-8162-C6653A74EB5A"
                                                },
                                                {
                                                    "title":"8.3.2.2 Instantiation SCNs and Oracle Streams Tags Resulting from Data Pump Imports",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-DC727837-86F3-4786-98DF-0071B8F3EDB9"
                                                },
                                                {
                                                    "title":"8.3.2.3 The STREAMS_CONFIGURATION Data Pump Import Utility Parameter",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-3D8F02FD-80E9-41F0-A39B-56770AFAB937"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"8.3.3 Instantiating Objects Using Data Pump Export/Import",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-E00E89D3-2ACB-4259-BC8B-3787DF576875"
                                        }
                                    ]
                                },
                                {
                                    "title":"8.4 Recovery Manager (RMAN) and Oracle Streams Instantiation",
                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-34BBF85F-E48A-497E-94F4-54911224CDEC",
                                    "topics":[
                                        {
                                            "title":"8.4.1 Instantiating Objects in a Tablespace Using Transportable Tablespace or RMAN",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-E74B9C41-8F19-423F-9CC0-9CF8B34569FD",
                                            "topics":[
                                                {
                                                    "title":"8.4.1.1 Instantiating Objects Using Transportable Tablespace",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-697E750C-6920-4D44-909D-AB9CA2A75951"
                                                },
                                                {
                                                    "title":"8.4.1.2 Instantiating Objects Using Transportable Tablespace From Backup With RMAN",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-89AEE784-C5CF-4D57-94BC-D636A123E9D5"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"8.4.2 Instantiating an Entire Database Using RMAN",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-65A7F70C-C849-40FB-8351-CFF3114C9271",
                                            "topics":[
                                                {
                                                    "title":"8.4.2.1 Instantiating an Entire Database on the Same Platform Using RMAN",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-442D4798-708F-44CB-90EA-6B5DD7F8C71B"
                                                },
                                                {
                                                    "title":"8.4.2.2 Instantiating an Entire Database on Different Platforms Using RMAN",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-2E02C473-967C-4FF2-ADCE-6EE0D308F30D"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"8.5 Setting Instantiation SCNs at a Destination Database",
                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-35E458F3-6293-47A8-AB12-FA7720E99AC0",
                                    "topics":[
                                        {
                                            "title":"8.5.1 Setting Instantiation SCNs Using Export/Import",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-478D3B54-1CFC-43DC-8741-6C7F7DF8A68D",
                                            "topics":[
                                                {
                                                    "title":"8.5.1.1 Full Database Export and Full Database Import",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-280B415A-E06A-4FE3-AF78-8BA4A924063D"
                                                },
                                                {
                                                    "title":"8.5.1.2 Full Database or User Export and User Import",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-412F9F82-FBC0-4F4F-BE5C-078142ACF551"
                                                },
                                                {
                                                    "title":"8.5.1.3 Full Database, User, or Table Export and Table Import",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-8516E3A0-BED8-409E-AF13-03C2CF7E769B"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"8.5.2 Setting Instantiation SCNs Using the DBMS_APPLY_ADM Package",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-F612AD02-15B7-4392-815E-1EB05A493633",
                                            "topics":[
                                                {
                                                    "title":"8.5.2.1 Setting the Instantiation SCN While Connected to the Source Database",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-6E4DE138-3A06-43B0-9733-E90B1A5B59C2"
                                                },
                                                {
                                                    "title":"8.5.2.2 Setting the Instantiation SCN While Connected to the Destination Database",
                                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-8888F3E1-9F53-4F55-85A2-8D5A6F23B8B0"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"8.6 Monitoring Instantiation",
                                    "href":"instantiation-and-oracle-streams-replication.html#GUID-D03E9B4C-F2CD-4C20-B0A4-19ED3CA5AA61",
                                    "topics":[
                                        {
                                            "title":"8.6.1 Determining Which Database Objects Are Prepared for Instantiation",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-97F9EDD6-CD46-4A05-ACB8-6591E00D0759"
                                        },
                                        {
                                            "title":"8.6.2 Determining the Tables for Which an Instantiation SCN Has Been Set",
                                            "href":"instantiation-and-oracle-streams-replication.html#GUID-3F8E989C-465B-48FD-B014-B2243D71967D"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"9 Oracle Streams Conflict Resolution",
                            "href":"oracle-streams-conflict-resolution.html#GUID-5D79AA72-A682-4623-8A0B-4CF84D1FFC86",
                            "topics":[
                                {
                                    "title":"9.1 About DML Conflicts in an Oracle Streams Environment",
                                    "href":"oracle-streams-conflict-resolution.html#GUID-EE05C68D-2241-4996-9BF6-E2E6CBCE8C32"
                                },
                                {
                                    "title":"9.2 Conflict Types in an Oracle Streams Environment",
                                    "href":"oracle-streams-conflict-resolution.html#GUID-5B8756A2-A59D-49C5-B7BA-3DAD8A9F1E03",
                                    "topics":[
                                        {
                                            "title":"9.2.1 Update Conflicts in an Oracle Streams Environment",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-F06B7F02-4B5D-40D5-9586-67B49E18B253"
                                        },
                                        {
                                            "title":"9.2.2 Uniqueness Conflicts in an Oracle Streams Environment",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-83279438-BA5D-438A-A40F-52C374DD41F5"
                                        },
                                        {
                                            "title":"9.2.3 Delete Conflicts in an Oracle Streams Environment",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-D7879F2E-4C77-4853-9FE9-24F4571EDA9F"
                                        },
                                        {
                                            "title":"9.2.4 Foreign Key Conflicts in an Oracle Streams Environment",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-299013B0-7D0B-4AA8-BB63-85A20895803B"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.3 Conflicts and Transaction Ordering in an Oracle Streams Environment",
                                    "href":"oracle-streams-conflict-resolution.html#GUID-C981059C-27DD-4C76-A682-5C06A0BA2754"
                                },
                                {
                                    "title":"9.4 Conflict Detection in an Oracle Streams Environment",
                                    "href":"oracle-streams-conflict-resolution.html#GUID-D79B1715-F633-4C3D-874D-5183DB231766",
                                    "topics":[
                                        {
                                            "title":"9.4.1 Control Over Conflict Detection for Nonkey Columns",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-3D700815-7E2A-4B75-AD45-CB0CF09089C5"
                                        },
                                        {
                                            "title":"9.4.2 Rows Identification During Conflict Detection in an Oracle Streams Environment",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-7E2F9B47-D717-4D27-A97B-F7DF82D44FCF"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.5 Conflict Avoidance in an Oracle Streams Environment",
                                    "href":"oracle-streams-conflict-resolution.html#GUID-A3CB79E8-4963-4610-9E75-891FA71E625F",
                                    "topics":[
                                        {
                                            "title":"9.5.1 Use a Primary Database Ownership Model",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-B1C8BC31-B8D0-46EF-B427-39B5C7ECC413"
                                        },
                                        {
                                            "title":"9.5.2 Avoid Specific Types of Conflicts",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-BAF84F3A-EDCF-44B7-AD9E-E8680F508408",
                                            "topics":[
                                                {
                                                    "title":"9.5.2.1 Avoid Uniqueness Conflicts in an Oracle Streams Environment",
                                                    "href":"oracle-streams-conflict-resolution.html#GUID-4C4B7A9D-6471-4F23-9877-7540D5705265"
                                                },
                                                {
                                                    "title":"9.5.2.2 Avoid Delete Conflicts in an Oracle Streams Environment",
                                                    "href":"oracle-streams-conflict-resolution.html#GUID-EC3EA82C-773D-4DAA-9F65-5057ADAF2F1F"
                                                },
                                                {
                                                    "title":"9.5.2.3 Avoid Update Conflicts in an Oracle Streams Environment",
                                                    "href":"oracle-streams-conflict-resolution.html#GUID-56756D64-5201-494B-8199-168BA39A3215"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"9.6 Conflict Resolution in an Oracle Streams Environment",
                                    "href":"oracle-streams-conflict-resolution.html#GUID-A610F273-078E-4697-B483-2FF7DA464A14",
                                    "topics":[
                                        {
                                            "title":"9.6.1 Prebuilt Update Conflict Handlers",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-3D424F00-2100-41F1-B7A0-61273CD464C9",
                                            "topics":[
                                                {
                                                    "title":"9.6.1.1 Types of Prebuilt Update Conflict Handlers",
                                                    "href":"oracle-streams-conflict-resolution.html#GUID-6E632DC4-0FDE-4BF5-98C2-96ED5CB2929A",
                                                    "topics":[
                                                        {
                                                            "title":"9.6.1.1.1 OVERWRITE",
                                                            "href":"oracle-streams-conflict-resolution.html#GUID-A7AC095A-C551-4325-90BF-060CF5559602"
                                                        },
                                                        {
                                                            "title":"9.6.1.1.2 DISCARD",
                                                            "href":"oracle-streams-conflict-resolution.html#GUID-0FB4B5B0-BE06-4497-909C-8B11FF2252C1"
                                                        },
                                                        {
                                                            "title":"9.6.1.1.3 MAXIMUM",
                                                            "href":"oracle-streams-conflict-resolution.html#GUID-8B588001-83C5-44BD-A204-C2BB109B401C"
                                                        },
                                                        {
                                                            "title":"9.6.1.1.4 MINIMUM",
                                                            "href":"oracle-streams-conflict-resolution.html#GUID-DFC279BE-E686-4A94-B53D-B0DA9047D178"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"9.6.1.2 Column Lists",
                                                    "href":"oracle-streams-conflict-resolution.html#GUID-F03634B1-C4A5-4416-B17E-033815CFA4CA"
                                                },
                                                {
                                                    "title":"9.6.1.3 Resolution Columns",
                                                    "href":"oracle-streams-conflict-resolution.html#GUID-EF83D0EE-A67E-40B0-9320-AC490C72B36E"
                                                },
                                                {
                                                    "title":"9.6.1.4 Data Convergence",
                                                    "href":"oracle-streams-conflict-resolution.html#GUID-9270020C-3143-4C39-B317-D88B44FAE391"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"9.6.2 Custom Conflict Handlers",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-A1B4D351-CC35-49A6-B592-383CA92C1ED6"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.7 Managing Oracle Streams Conflict Detection and Resolution",
                                    "href":"oracle-streams-conflict-resolution.html#GUID-06D7D452-AE20-4DF3-AE9B-5F4CB6FB016A",
                                    "topics":[
                                        {
                                            "title":"9.7.1 Setting an Update Conflict Handler",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-7F980394-BA75-47CD-A608-63BE4603B7FB"
                                        },
                                        {
                                            "title":"9.7.2 Modifying an Existing Update Conflict Handler",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-23C604EC-B9E1-4A2E-9A4D-A7F24B9340AA"
                                        },
                                        {
                                            "title":"9.7.3 Removing an Existing Update Conflict Handler",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-CC2A9A39-7FC7-4752-88F6-2E5F3FA3007F"
                                        },
                                        {
                                            "title":"9.7.4 Stopping Conflict Detection for Nonkey Columns",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-320A3262-6A24-4B75-89E2-2A7DACBAFDC8"
                                        }
                                    ]
                                },
                                {
                                    "title":"9.8 Monitoring Conflict Detection and Update Conflict Handlers",
                                    "href":"oracle-streams-conflict-resolution.html#GUID-C5CD26C3-D4A8-4F1F-8C4A-3A697962A5EE",
                                    "topics":[
                                        {
                                            "title":"9.8.1 Displaying Information About Conflict Detection",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-103C7517-F51F-4A58-AA1A-644658D12DE9"
                                        },
                                        {
                                            "title":"9.8.2 Displaying Information About Update Conflict Handlers",
                                            "href":"oracle-streams-conflict-resolution.html#GUID-0C6DACF1-BB9E-402E-813F-D480C890ED5C"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"10 Oracle Streams Tags",
                            "href":"oracle-streams-tags.html#GUID-9339D29B-65F3-450B-B3CD-A7B4ADCA4AAF",
                            "topics":[
                                {
                                    "title":"10.1 Introduction to Tags",
                                    "href":"oracle-streams-tags.html#GUID-B32114FB-2828-455F-93D1-9E9123D77E80"
                                },
                                {
                                    "title":"10.2 Tags and Rules Created by the DBMS_STREAMS_ADM Package",
                                    "href":"oracle-streams-tags.html#GUID-1EB3D6C4-0F12-4AE8-B444-998CC2460677"
                                },
                                {
                                    "title":"10.3 Tags and Online Backup Statements",
                                    "href":"oracle-streams-tags.html#GUID-42343FB9-7AD1-4A18-84AA-B96908611951"
                                },
                                {
                                    "title":"10.4 Tags and an Apply Process",
                                    "href":"oracle-streams-tags.html#GUID-5FD605D0-ADD5-4E22-B976-6CEB0F816900"
                                },
                                {
                                    "title":"10.5 Oracle Streams Tags in a Replication Environment",
                                    "href":"oracle-streams-tags.html#GUID-DEA16475-320C-4256-A4E0-C341712AF7F7",
                                    "topics":[
                                        {
                                            "title":"10.5.1 N-Way Replication Environments",
                                            "href":"oracle-streams-tags.html#GUID-C5550D57-5B0B-457C-BB4D-F48D36704890"
                                        },
                                        {
                                            "title":"10.5.2 Hub-and-Spoke Replication Environments",
                                            "href":"oracle-streams-tags.html#GUID-E5616956-80BD-4C1E-8E94-58C981A524B8"
                                        },
                                        {
                                            "title":"10.5.3 Hub-and-Spoke Replication Environment with Several Extended Secondary Databases",
                                            "href":"oracle-streams-tags.html#GUID-66059A2F-F9EC-4EE7-97E0-15DEB7A1BDBC"
                                        }
                                    ]
                                },
                                {
                                    "title":"10.6 Managing Oracle Streams Tags",
                                    "href":"oracle-streams-tags.html#GUID-03BE0EFB-93E3-4CDE-8CE9-080915B44541",
                                    "topics":[
                                        {
                                            "title":"10.6.1 Managing Oracle Streams Tags for the Current Session",
                                            "href":"oracle-streams-tags.html#GUID-CAC7C09B-FE65-4274-8BC1-E3692F1995DD",
                                            "topics":[
                                                {
                                                    "title":"10.6.1.1 Setting the Tag Values Generated by the Current Session",
                                                    "href":"oracle-streams-tags.html#GUID-648CAF13-AD3E-46E0-9F1A-C47ACDDDEA0E"
                                                },
                                                {
                                                    "title":"10.6.1.2 Getting the Tag Value for the Current Session",
                                                    "href":"oracle-streams-tags.html#GUID-4B5245A6-9E33-42D4-B68A-E6548FBF74DA"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"10.6.2 Managing Oracle Streams Tags for an Apply Process",
                                            "href":"oracle-streams-tags.html#GUID-AE339D0B-8095-4A19-9E4D-C28285E638AD",
                                            "topics":[
                                                {
                                                    "title":"10.6.2.1 Setting the Tag Values Generated by an Apply Process",
                                                    "href":"oracle-streams-tags.html#GUID-3A09D27C-2AA9-4FC5-AFB7-9112AB9CCB1F"
                                                },
                                                {
                                                    "title":"10.6.2.2 Removing the Apply Tag for an Apply Process",
                                                    "href":"oracle-streams-tags.html#GUID-5AF40531-B488-423C-9071-22018D960B04"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"10.7 Monitoring Oracle Streams Tags",
                                    "href":"oracle-streams-tags.html#GUID-278F0DD2-2E16-4049-8506-E23D263ABDBD",
                                    "topics":[
                                        {
                                            "title":"10.7.1 Displaying the Tag Value for the Current Session",
                                            "href":"oracle-streams-tags.html#GUID-F6B83A19-CA88-4722-B1E8-7758CCF3D48D"
                                        },
                                        {
                                            "title":"10.7.2 Displaying the Default Tag Value for Each Apply Process",
                                            "href":"oracle-streams-tags.html#GUID-EEE0C964-0223-4F7D-9EA9-30D9A9FAB29B"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"11 Oracle Streams Heterogeneous Information Sharing",
                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-1D477CA9-2D7B-41C1-987B-0A2300534F7D",
                            "topics":[
                                {
                                    "title":"11.1 Oracle to Non-Oracle Data Sharing with Oracle Streams",
                                    "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-AEDB8064-0AAE-4D55-96E3-425F9F2049A6",
                                    "topics":[
                                        {
                                            "title":"11.1.1 Change Capture and Staging in an Oracle to Non-Oracle Environment",
                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-665EC15B-5D87-4DD4-94F3-C333989CE079"
                                        },
                                        {
                                            "title":"11.1.2 Change Apply in an Oracle to Non-Oracle Environment",
                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-0623B04D-6597-470E-B85B-4A2A1357ABF2",
                                            "topics":[
                                                {
                                                    "title":"11.1.2.1 Apply Process Configuration in an Oracle to Non-Oracle Environment",
                                                    "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-A154A756-F362-4CC0-8525-9DC9054D2316",
                                                    "topics":[
                                                        {
                                                            "title":"11.1.2.1.1 Before Creating an Apply Process in an Oracle to Non-Oracle Environment",
                                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-90B4B14C-A1A4-4BB6-8EF4-A710DCC19566"
                                                        },
                                                        {
                                                            "title":"11.1.2.1.2 Apply Process Creation in an Oracle to Non-Oracle Environment",
                                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-8F660094-8F75-4A65-AB7C-D4EE0EB25E3C"
                                                        },
                                                        {
                                                            "title":"11.1.2.1.3 Substitute Key Columns in an Oracle to Non-Oracle Heterogeneous Environment",
                                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-AF761ED9-590D-4C50-A7DD-9CB22BD7FD8C"
                                                        },
                                                        {
                                                            "title":"11.1.2.1.4 Parallelism in an Oracle to Non-Oracle Heterogeneous Environment",
                                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-064959CA-31F1-49D1-BA86-409851DC3958"
                                                        },
                                                        {
                                                            "title":"11.1.2.1.5 Procedure DML Handlers in an Oracle to Non-Oracle Heterogeneous Environment",
                                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-84349384-73AD-4F22-A492-62BA004F14F2"
                                                        },
                                                        {
                                                            "title":"11.1.2.1.6 Message Handlers in an Oracle to Non-Oracle Heterogeneous Environment",
                                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-9C54C107-B141-413E-951A-E4203F1CD6C0"
                                                        },
                                                        {
                                                            "title":"11.1.2.1.7 Error and Conflict Handlers in an Oracle to Non-Oracle Heterogeneous Environment",
                                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-7400E6C3-2397-484C-86F7-23FD1611EFF8"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"11.1.2.2 Data Types Applied at Non-Oracle Databases",
                                                    "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-642D6750-0BE4-47F2-8720-50262AB7AE37"
                                                },
                                                {
                                                    "title":"11.1.2.3 Types of DML Changes Applied at Non-Oracle Databases",
                                                    "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-A3F603F3-78E1-47FA-B531-EAD59274240C"
                                                },
                                                {
                                                    "title":"11.1.2.4 Instantiation in an Oracle to Non-Oracle Environment",
                                                    "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-12154067-E145-4916-BD02-0B0BCDA06185"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"11.1.3 Transformations in an Oracle to Non-Oracle Environment",
                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-2F98839D-40F7-4A6C-81F8-D3E94E3E8CB5"
                                        },
                                        {
                                            "title":"11.1.4 Messaging Gateway and Oracle Streams",
                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-EF852421-5C34-42A6-8043-6A5B115C9ACB"
                                        },
                                        {
                                            "title":"11.1.5 Error Handling in an Oracle to Non-Oracle Environment",
                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-30FB9547-D16C-48EA-BC40-D2B80C7BFEDC"
                                        },
                                        {
                                            "title":"11.1.6 Example Oracle to Non-Oracle Streams Environment",
                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-F8F33215-2266-4043-9946-A517C7536F99"
                                        }
                                    ]
                                },
                                {
                                    "title":"11.2 Non-Oracle to Oracle Data Sharing with Oracle Streams",
                                    "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-B650AFB9-FB62-42FD-AAB2-4A575DB860BC",
                                    "topics":[
                                        {
                                            "title":"11.2.1 Change Capture in a Non-Oracle to Oracle Environment",
                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-BFE62C1C-97CA-4379-9A55-328DA45B40FD"
                                        },
                                        {
                                            "title":"11.2.2 Staging in a Non-Oracle to Oracle Environment",
                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-53956B36-651B-4F3C-B225-3D92187A27B2"
                                        },
                                        {
                                            "title":"11.2.3 Change Apply in a Non-Oracle to Oracle Environment",
                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-167D80E4-0C7E-428E-AFD7-DB16A2E33460"
                                        },
                                        {
                                            "title":"11.2.4 Instantiation from a Non-Oracle Database to an Oracle Database",
                                            "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-A056FE7E-186D-4F56-A05A-38CC7C3B2FA7"
                                        }
                                    ]
                                },
                                {
                                    "title":"11.3 Non-Oracle to Non-Oracle Data Sharing with Oracle Streams",
                                    "href":"oracle-streams-heterogeneous-information-sharing.html#GUID-C3CC6DEF-351A-4F2C-A9E6-C1A7AF22E7FF"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part II Administering Oracle Streams Replication",
                    "href":"administering-oracle-streams.html",
                    "topics":[
                        {
                            "title":"12 Managing Oracle Streams Replication",
                            "href":"managing-oracle-streams-replication.html#GUID-4F2BD66D-0B2B-4FC0-9A99-DDEB8B8B7C54",
                            "topics":[
                                {
                                    "title":"12.1 About Managing Oracle Streams",
                                    "href":"managing-oracle-streams-replication.html#GUID-7F9C0ABD-B45B-4F22-AED1-FD475BE92DBB"
                                },
                                {
                                    "title":"12.2 Tracking LCRs Through a Stream",
                                    "href":"managing-oracle-streams-replication.html#GUID-8E42FE9C-CCB4-41EC-AE36-28C3B21382FB"
                                },
                                {
                                    "title":"12.3 Splitting and Merging an Oracle Streams Destination",
                                    "href":"managing-oracle-streams-replication.html#GUID-AA83B519-1C30-4961-9B71-7AE07CE48517",
                                    "topics":[
                                        {
                                            "title":"12.3.1 About Splitting and Merging Oracle Streams",
                                            "href":"managing-oracle-streams-replication.html#GUID-A04C292B-C8BD-4F6C-8BAC-5E5D6BD67E5D"
                                        },
                                        {
                                            "title":"12.3.2 Split and Merge Options",
                                            "href":"managing-oracle-streams-replication.html#GUID-8A092D48-84D2-46E3-A9A6-7322A650A9CC",
                                            "topics":[
                                                {
                                                    "title":"12.3.2.1 Automatic Split and Merge",
                                                    "href":"managing-oracle-streams-replication.html#GUID-CA711876-5519-4E84-9B69-C51E92F44847"
                                                },
                                                {
                                                    "title":"12.3.2.2 Manual Split and Automatic Merge",
                                                    "href":"managing-oracle-streams-replication.html#GUID-F6234B8C-A2DC-4B49-AD94-79B153C27BDA"
                                                },
                                                {
                                                    "title":"12.3.2.3 Manual Split and Merge With Generated Scripts",
                                                    "href":"managing-oracle-streams-replication.html#GUID-1F82FEDD-13BA-4E07-9831-BC8ECF16A84B"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"12.3.3 Examples That Split and Merge Oracle Streams",
                                            "href":"managing-oracle-streams-replication.html#GUID-EDA3F250-B91F-423F-ABB3-EB20595A3552",
                                            "topics":[
                                                {
                                                    "title":"12.3.3.1 Splitting and Merging an Oracle Streams Destination Automatically",
                                                    "href":"managing-oracle-streams-replication.html#GUID-735E9738-BB78-426D-9321-25567EB49632"
                                                },
                                                {
                                                    "title":"12.3.3.2 Splitting an Oracle Streams Destination Manually and Merging It Automatically",
                                                    "href":"managing-oracle-streams-replication.html#GUID-C5F2A44D-3A11-41FC-9D16-83926B5B6D96"
                                                },
                                                {
                                                    "title":"12.3.3.3 Splitting and Merging an Oracle Streams Destination Manually With Scripts",
                                                    "href":"managing-oracle-streams-replication.html#GUID-9D9C8E3C-7CA2-48CA-9277-C03356031899"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"12.4 Changing the DBID or Global Name of a Source Database",
                                    "href":"managing-oracle-streams-replication.html#GUID-15E7DA26-5E2C-4C0A-9626-6041C75E6E72"
                                },
                                {
                                    "title":"12.5 Resynchronizing a Source Database in a Multiple-Source Environment",
                                    "href":"managing-oracle-streams-replication.html#GUID-BD253F79-7E78-46B8-8936-5AC9E5B4D1E1"
                                },
                                {
                                    "title":"12.6 Performing Database Point-in-Time Recovery in an Oracle Streams Environment",
                                    "href":"managing-oracle-streams-replication.html#GUID-BF084D6E-24E9-4E6F-BBEE-11540CF844CD",
                                    "topics":[
                                        {
                                            "title":"12.6.1 Performing Point-in-Time Recovery on the Source in a Single-Source Environment",
                                            "href":"managing-oracle-streams-replication.html#GUID-2C997159-A1F8-46F8-855F-DB2F0B12BDC3"
                                        },
                                        {
                                            "title":"12.6.2 Performing Point-in-Time Recovery in a Multiple-Source Environment",
                                            "href":"managing-oracle-streams-replication.html#GUID-ABC4B432-DD47-46AF-8889-5C90D231A4AA"
                                        },
                                        {
                                            "title":"12.6.3 Performing Point-in-Time Recovery on a Destination Database",
                                            "href":"managing-oracle-streams-replication.html#GUID-8738698A-F47F-496A-80BE-4DB1F19F2BA5",
                                            "topics":[
                                                {
                                                    "title":"12.6.3.1 Resetting the Start SCN for the Existing Capture Process to Perform Recovery",
                                                    "href":"managing-oracle-streams-replication.html#GUID-8F3D4AB1-3E6B-433F-8F36-7A5AC1467731"
                                                },
                                                {
                                                    "title":"12.6.3.2 Creating a New Capture Process to Perform Recovery",
                                                    "href":"managing-oracle-streams-replication.html#GUID-7F2A0BFE-822B-4EE6-A28A-4B97E2DA8FDE"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"12.7 Running Flashback Queries in an Oracle Streams Replication Environment",
                                    "href":"managing-oracle-streams-replication.html#GUID-F76D1CF1-3DB8-4CDC-BEF6-F628A5865B8D"
                                },
                                {
                                    "title":"12.8 Recovering from Operation Errors",
                                    "href":"managing-oracle-streams-replication.html#GUID-52B85E39-2264-47E2-981A-63CA23C7380A",
                                    "topics":[
                                        {
                                            "title":"12.8.1 Recovery Scenario",
                                            "href":"managing-oracle-streams-replication.html#GUID-C0B06B85-5F3E-4E58-8979-6D62136BCBA6"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"13 Comparing and Converging Data",
                            "href":"comparing-and-converging-data.html#GUID-A6644AD9-8EB7-4528-9E53-A6CF0616A5E9",
                            "topics":[
                                {
                                    "title":"13.1 About Comparing and Converging Data",
                                    "href":"comparing-and-converging-data.html#GUID-C6F88A41-0E58-42B1-93B7-B8AEFC699248",
                                    "topics":[
                                        {
                                            "title":"13.1.1 Scans",
                                            "href":"comparing-and-converging-data.html#GUID-13C64E24-C59E-4FDE-AFDB-840ED0C95682"
                                        },
                                        {
                                            "title":"13.1.2 Buckets",
                                            "href":"comparing-and-converging-data.html#GUID-86F03802-8C7F-4FC7-86DD-4AFD19931DD7"
                                        },
                                        {
                                            "title":"13.1.3 Parent Scans and Root Scans",
                                            "href":"comparing-and-converging-data.html#GUID-52AF3A5B-A890-41DD-A59B-FD922BDCA8C1"
                                        },
                                        {
                                            "title":"13.1.4 How Scans and Buckets Identify Differences",
                                            "href":"comparing-and-converging-data.html#GUID-20487EA3-B7F1-4273-A997-9529A504A2A0"
                                        }
                                    ]
                                },
                                {
                                    "title":"13.2 Other Documentation About the DBMS_COMPARISON Package",
                                    "href":"comparing-and-converging-data.html#GUID-BBE7C7D0-F997-44D9-9822-221FB4046463"
                                },
                                {
                                    "title":"13.3 Quick Start: A Simple Compare and Converge Scenario",
                                    "href":"comparing-and-converging-data.html#GUID-C451D65E-659E-4C23-8B24-7C0EB546E543",
                                    "topics":[
                                        {
                                            "title":"13.3.1 Tutorial: Preparing to Compare and Converge Data",
                                            "href":"comparing-and-converging-data.html#GUID-65203E1B-8DAA-4DAA-A849-E4CAD05C2CD9"
                                        },
                                        {
                                            "title":"13.3.2 Tutorial: Comparing Data in Two Different Databases",
                                            "href":"comparing-and-converging-data.html#GUID-5102303E-2A17-4F3D-9CC2-064AB71DE56C"
                                        },
                                        {
                                            "title":"13.3.3 Tutorial: Converging Divergent Data",
                                            "href":"comparing-and-converging-data.html#GUID-865155AB-53FC-4556-A4E2-B1A4F6536EA1"
                                        }
                                    ]
                                },
                                {
                                    "title":"13.4 Preparing To Compare and Converge a Shared Database Object",
                                    "href":"comparing-and-converging-data.html#GUID-0F865C0C-FF1C-4E81-BD13-72985DB66BF1"
                                },
                                {
                                    "title":"13.5 Diverging a Database Object at Two Databases to Complete Examples",
                                    "href":"comparing-and-converging-data.html#GUID-E169666D-4804-46BC-ADC9-0FE981C0A93E"
                                },
                                {
                                    "title":"13.6 Comparing a Shared Database Object at Two Databases",
                                    "href":"comparing-and-converging-data.html#GUID-14E2C4EC-8540-4DA0-977D-3235F40D6B39",
                                    "topics":[
                                        {
                                            "title":"13.6.1 Comparing a Subset of Columns in a Shared Database Object",
                                            "href":"comparing-and-converging-data.html#GUID-C3CBB4A6-97FC-4872-BE60-D33C4DA97485"
                                        },
                                        {
                                            "title":"13.6.2 Comparing a Shared Database Object without Identifying Row Differences",
                                            "href":"comparing-and-converging-data.html#GUID-37B8F51E-177C-49A7-AE8F-F63AF9CFD2C4"
                                        },
                                        {
                                            "title":"13.6.3 Comparing a Random Portion of a Shared Database Object",
                                            "href":"comparing-and-converging-data.html#GUID-A260F13A-DD58-4B3D-A3E1-285FBCBDB8E2"
                                        },
                                        {
                                            "title":"13.6.4 Comparing a Shared Database Object Cyclically",
                                            "href":"comparing-and-converging-data.html#GUID-FCCE4DB4-5C93-4389-9EA9-9713EC5CB19A"
                                        },
                                        {
                                            "title":"13.6.5 Comparing a Custom Portion of a Shared Database Object",
                                            "href":"comparing-and-converging-data.html#GUID-66714C82-06B6-4920-82F4-98CF66285825"
                                        },
                                        {
                                            "title":"13.6.6 Comparing a Shared Database Object That Contains CLOB or BLOB Columns",
                                            "href":"comparing-and-converging-data.html#GUID-1FBBB5DF-39A6-4449-94FC-2DC234432C62"
                                        }
                                    ]
                                },
                                {
                                    "title":"13.7 Viewing Information About Comparisons and Comparison Results",
                                    "href":"comparing-and-converging-data.html#GUID-4C7E9DCA-893D-4B83-BC4C-949AEE797B8D",
                                    "topics":[
                                        {
                                            "title":"13.7.1 Viewing General Information About the Comparisons in a Database",
                                            "href":"comparing-and-converging-data.html#GUID-93B851FB-FDC0-4115-86D9-EA2A3D5F8F1B"
                                        },
                                        {
                                            "title":"13.7.2 Viewing Information Specific to Random and Cyclic Comparisons",
                                            "href":"comparing-and-converging-data.html#GUID-23E2AA54-70F7-4A99-BFFC-AC8C4245D98E"
                                        },
                                        {
                                            "title":"13.7.3 Viewing the Columns Compared by Each Comparison in a Database",
                                            "href":"comparing-and-converging-data.html#GUID-1DAD2588-7AB5-4E06-9AF5-23127846C2A2"
                                        },
                                        {
                                            "title":"13.7.4 Viewing General Information About Each Scan in a Database",
                                            "href":"comparing-and-converging-data.html#GUID-8FE56DB8-AE2C-4E16-8654-A477DBBF8F84"
                                        },
                                        {
                                            "title":"13.7.5 Viewing the Parent Scan ID and Root Scan ID for Each Scan in a Database",
                                            "href":"comparing-and-converging-data.html#GUID-DF174976-2625-4CCE-B46C-F5E93E7061DE"
                                        },
                                        {
                                            "title":"13.7.6 Viewing Detailed Information About the Row Differences Found in a Scan",
                                            "href":"comparing-and-converging-data.html#GUID-AF1D9F6A-4A13-48CA-BE35-9BAA73E22A20"
                                        },
                                        {
                                            "title":"13.7.7 Viewing Information About the Rows Compared in Specific Scans",
                                            "href":"comparing-and-converging-data.html#GUID-73174B3C-4A42-47E0-A3DE-443424F2F2F0"
                                        }
                                    ]
                                },
                                {
                                    "title":"13.8 Converging a Shared Database Object",
                                    "href":"comparing-and-converging-data.html#GUID-8A407854-CB8B-4337-8D8F-8174667CA3F2",
                                    "topics":[
                                        {
                                            "title":"13.8.1 Converging a Shared Database Object for Consistency with the Local Object",
                                            "href":"comparing-and-converging-data.html#GUID-251A23FD-2956-4613-BE45-7ABAE10A2C2B"
                                        },
                                        {
                                            "title":"13.8.2 Converging a Shared Database Object for Consistency with the Remote Object",
                                            "href":"comparing-and-converging-data.html#GUID-FFEC5F1D-D65A-4CE9-9DC4-2E298120D12E"
                                        },
                                        {
                                            "title":"13.8.3 Converging a Shared Database Object with a Session Tag Set",
                                            "href":"comparing-and-converging-data.html#GUID-E098F515-7F5F-4CDB-98EA-98B99DC66E06"
                                        }
                                    ]
                                },
                                {
                                    "title":"13.9 Rechecking the Comparison Results for a Comparison",
                                    "href":"comparing-and-converging-data.html#GUID-904E8F04-2DE4-4A44-9C5B-58B50949E945"
                                },
                                {
                                    "title":"13.10 Purging Comparison Results",
                                    "href":"comparing-and-converging-data.html#GUID-23766756-FA44-47CC-8E55-32EDD5C69965",
                                    "topics":[
                                        {
                                            "title":"13.10.1 Purging All of the Comparison Results for a Comparison",
                                            "href":"comparing-and-converging-data.html#GUID-88B9AD7E-294D-49A3-ACEE-C9388FA0BCB7"
                                        },
                                        {
                                            "title":"13.10.2 Purging the Comparison Results for a Specific Scan ID of a Comparison",
                                            "href":"comparing-and-converging-data.html#GUID-202DA157-2AFB-4160-B0FB-3C1126C068A5"
                                        },
                                        {
                                            "title":"13.10.3 Purging the Comparison Results of a Comparison Before a Specified Time",
                                            "href":"comparing-and-converging-data.html#GUID-4F4696B7-63D6-4745-9205-AD850665F9CA"
                                        }
                                    ]
                                },
                                {
                                    "title":"13.11 Dropping a Comparison",
                                    "href":"comparing-and-converging-data.html#GUID-91E62DE9-0C50-484C-9A63-61CA7E14E587"
                                },
                                {
                                    "title":"13.12 Using DBMS_COMPARISON in an Oracle Streams Replication Environment",
                                    "href":"comparing-and-converging-data.html#GUID-7E23979E-221F-4B4D-A505-B7ADF2E76810",
                                    "topics":[
                                        {
                                            "title":"13.12.1 Checking for Consistency After Instantiation",
                                            "href":"comparing-and-converging-data.html#GUID-BE4621F5-4EEC-491C-9141-ABDCCA282D9E"
                                        },
                                        {
                                            "title":"13.12.2 Checking for Consistency in a Running Oracle Streams Replication Environment",
                                            "href":"comparing-and-converging-data.html#GUID-8C7E1099-E3C3-432D-9AF2-DDD3ED24AC50"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"14 Managing Logical Change Records (LCRs)",
                            "href":"managing-lcrs.html#GUID-2A1F6DF1-EB89-4C14-BD88-C6AE047A2041",
                            "topics":[
                                {
                                    "title":"14.1 Requirements for Managing LCRs",
                                    "href":"managing-lcrs.html#GUID-8FC6B9C8-AFD4-43DF-A77B-196FC74D4908"
                                },
                                {
                                    "title":"14.2 Constructing and Enqueuing LCRs",
                                    "href":"managing-lcrs.html#GUID-7DE3B8F2-C0FB-41F8-8971-591866C67D3F"
                                },
                                {
                                    "title":"14.3 Executing LCRs",
                                    "href":"managing-lcrs.html#GUID-FF3BD0F4-B038-4BB3-AB09-C2BB21D0D277",
                                    "topics":[
                                        {
                                            "title":"14.3.1 Executing Row LCRs",
                                            "href":"managing-lcrs.html#GUID-C3D09939-40FB-44E6-9AE2-0AC0B24B3D99",
                                            "topics":[
                                                {
                                                    "title":"14.3.1.1 Example of Constructing and Executing Row LCRs",
                                                    "href":"managing-lcrs.html#GUID-CD6846C9-D901-437A-ADE6-C03E4FE5F491"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"14.3.2 Executing DDL LCRs",
                                            "href":"managing-lcrs.html#GUID-54FDBADD-9ED8-417D-9211-4CB87BEF5177"
                                        }
                                    ]
                                },
                                {
                                    "title":"14.4 Managing LCRs Containing LOB Columns",
                                    "href":"managing-lcrs.html#GUID-DBB33256-5BEF-4FB7-8798-224EF929420A",
                                    "topics":[
                                        {
                                            "title":"14.4.1 Apply Process Behavior for Direct Apply of LCRs Containing LOBs",
                                            "href":"managing-lcrs.html#GUID-6D0BC1D3-77A1-46AC-86F2-4AE0C931B5F5"
                                        },
                                        {
                                            "title":"14.4.2 LOB Assembly and Custom Apply of LCRs Containing LOB Columns",
                                            "href":"managing-lcrs.html#GUID-EC7B53E6-C9ED-4188-AD9C-5953F76C53A9",
                                            "topics":[
                                                {
                                                    "title":"14.4.2.1 LOB Assembly Considerations",
                                                    "href":"managing-lcrs.html#GUID-C96EECED-9650-48A8-9030-91EF12F40F49"
                                                },
                                                {
                                                    "title":"14.4.2.2 LOB Assembly Example",
                                                    "href":"managing-lcrs.html#GUID-ECA298EA-B806-4ED4-8FD5-E08F0C7F28C4"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"14.4.3 Requirements for Constructing and Processing LCRs Containing LOB Columns",
                                            "href":"managing-lcrs.html#GUID-5303F21D-2D93-4F40-82AA-DDD0ECE70EAD",
                                            "topics":[
                                                {
                                                    "title":"14.4.3.1 Requirements for Constructing and Processing LCRs Without LOB Assembly",
                                                    "href":"managing-lcrs.html#GUID-1215650E-539D-42F4-94D0-E3E4645DC798"
                                                },
                                                {
                                                    "title":"14.4.3.2 Requirements for Apply Handler Processing of LCRs with LOB Assembly",
                                                    "href":"managing-lcrs.html#GUID-6FE2EC74-7C2E-4057-99F7-3FC646F6F590"
                                                },
                                                {
                                                    "title":"14.4.3.3 Requirements for Rule-Based Transformation Processing of LCRs with LOBs",
                                                    "href":"managing-lcrs.html#GUID-10744509-0388-4E27-9833-6FA1220C9362"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"14.5 Managing LCRs Containing LONG or LONG RAW Columns",
                                    "href":"managing-lcrs.html#GUID-98CB180E-69C5-4CC7-A4BD-4FD5A9B03F86"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part III Oracle Streams Replication Best Practices",
                    "href":"oracle-streams-replication-best-practices.html",
                    "topics":[
                        {
                            "title":"15 Best Practices for Oracle Streams Replication Databases",
                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-3BE2D126-6E83-48C4-92E6-5EA916CE95E1",
                            "topics":[
                                {
                                    "title":"15.1 Best Practices for Oracle Streams Database Configuration",
                                    "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-F7B6CE27-8711-486B-A9F3-FE3D3F9A864A",
                                    "topics":[
                                        {
                                            "title":"15.1.1 Use a Separate Queue for Capture and Apply Oracle Streams Clients",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-878A63D6-9D30-4369-A877-C3DC5DAAA28C"
                                        },
                                        {
                                            "title":"15.1.2 Automate the Oracle Streams Replication Configuration",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-730B5286-F0EA-4E67-BE0F-700610E16AD8"
                                        }
                                    ]
                                },
                                {
                                    "title":"15.2 Best Practices for Oracle Streams Database Operation",
                                    "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-A0113C05-708E-4BFD-8F26-7B4DDAD18501",
                                    "topics":[
                                        {
                                            "title":"15.2.1 Follow the Best Practices for the Global Name of an Oracle Streams Database",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-89103992-2B44-469E-9589-81BAB7797BC3"
                                        },
                                        {
                                            "title":"15.2.2 Monitor Performance and Make Adjustments When Necessary",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-4CFDB58D-3B6E-4548-981E-2E0DB6BD5C31"
                                        },
                                        {
                                            "title":"15.2.3 Monitor Capture Process's and Synchronous Capture's Queues for Size",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-54D079B0-6C02-4AAF-ABA1-77B5AE8FE973"
                                        },
                                        {
                                            "title":"15.2.4 Follow the Oracle Streams Best Practices for Backups",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-4A8E0E90-15B0-4BA1-94DF-5E80833DC960",
                                            "topics":[
                                                {
                                                    "title":"15.2.4.1 Best Practices for Backups of an Oracle Streams Source Database",
                                                    "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-1A0BA14B-FA0A-4E17-8712-94F8493BF0B8"
                                                },
                                                {
                                                    "title":"15.2.4.2 Best Practices for Backups of an Oracle Streams Destination Database",
                                                    "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-BACCCF50-967D-4A2C-B46A-4EC978F24F06"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"15.2.5 Adjust the Automatic Collection of Optimizer Statistics",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-8D16A40B-FAA4-4C63-861E-C97734D2BD34"
                                        },
                                        {
                                            "title":"15.2.6 Check the Alert Log for Oracle Streams Information",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-A0715AD7-C65D-488B-8269-A904DC63CBFF"
                                        },
                                        {
                                            "title":"15.2.7 Follow the Best Practices for Removing an Oracle Streams Configuration at a Database",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-F9EED488-73C4-4438-8EE9-7901E01B51F2"
                                        }
                                    ]
                                },
                                {
                                    "title":"15.3 Best Practices for Oracle Real Application Clusters and Oracle Streams",
                                    "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-9E3CABFC-BE9C-49ED-BD21-0A1858868AAB",
                                    "topics":[
                                        {
                                            "title":"15.3.1 Make Archive Log Files of All Threads Available to Capture Processes",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-8D94DF5F-5E4E-483D-A92A-EBF63BB4C95F"
                                        },
                                        {
                                            "title":"15.3.2 Follow the Best Practices for the Global Name of an Oracle RAC Database",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-0460C2E3-A0C3-4F50-BEE2-12A470605AF0"
                                        },
                                        {
                                            "title":"15.3.3 Follow the Best Practices for Configuring and Managing Propagations",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-E88C3128-1177-44DC-9887-2CB22CD54809"
                                        },
                                        {
                                            "title":"15.3.4 Follow the Best Practices for Queue Ownership",
                                            "href":"best-practices-for-oracle-streams-replication-databases.html#GUID-4CB1A90A-E222-455E-AE9E-5A0C3DD33DFE"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"16 Best Practices for Capture",
                            "href":"best-practices-for-capture.html#GUID-0D187578-0C2E-477C-B679-85670CFED7BA",
                            "topics":[
                                {
                                    "title":"16.1 Best Practices for Capture Process Configuration",
                                    "href":"best-practices-for-capture.html#GUID-8E96145D-C377-4C42-95DB-3CA5E2AAC2CD",
                                    "topics":[
                                        {
                                            "title":"16.1.1 Grant the Required Privileges to the Capture User",
                                            "href":"best-practices-for-capture.html#GUID-18E1385D-DB6F-4A85-BC35-4535D2DD94FC"
                                        },
                                        {
                                            "title":"16.1.2 Set Capture Process Parallelism",
                                            "href":"best-practices-for-capture.html#GUID-ED30E1D4-726B-41B3-BB20-97D5E95546E0"
                                        },
                                        {
                                            "title":"16.1.3 Set the Checkpoint Retention Time",
                                            "href":"best-practices-for-capture.html#GUID-E5EAB365-10A9-4315-AE62-4B2B2708E420"
                                        }
                                    ]
                                },
                                {
                                    "title":"16.2 Best Practices for Capture Process Operation",
                                    "href":"best-practices-for-capture.html#GUID-5BECE1D2-72BD-4A0F-BFF9-4B1E4762F9BC",
                                    "topics":[
                                        {
                                            "title":"16.2.1 Configure a Heartbeat Table at Each Source Database in an Oracle Streams Environment",
                                            "href":"best-practices-for-capture.html#GUID-585C1204-7519-4C26-A912-B33D5A922916"
                                        },
                                        {
                                            "title":"16.2.2 Perform a Dictionary Build and Prepare Database Objects for Instantiation Periodically",
                                            "href":"best-practices-for-capture.html#GUID-EEFDF8BB-3D96-4A35-B780-85B3AF4C84CC"
                                        },
                                        {
                                            "title":"16.2.3 Minimize the Performance Impact of Batch Processing",
                                            "href":"best-practices-for-capture.html#GUID-7B793A15-B34D-4D9F-A559-FDA86DCB8C29"
                                        }
                                    ]
                                },
                                {
                                    "title":"16.3 Best Practices for Synchronous Capture Configuration",
                                    "href":"best-practices-for-capture.html#GUID-193BC908-FEFE-406C-8C02-2F0A79A1EAB4"
                                }
                            ]
                        },
                        {
                            "title":"17 Best Practices for Propagation",
                            "href":"best-practices-for-propagation.html#GUID-60DFF412-B6E3-4FD6-91F0-0ECC31EE7108",
                            "topics":[
                                {
                                    "title":"17.1 Best Practices for Propagation Configuration",
                                    "href":"best-practices-for-propagation.html#GUID-BACEA4BE-674D-4058-B3FD-C220C71D0C0C",
                                    "topics":[
                                        {
                                            "title":"17.1.1 Use Queue-to-Queue Propagations",
                                            "href":"best-practices-for-propagation.html#GUID-D100FFC6-39C5-40CD-8E73-1B3C89430E5B"
                                        },
                                        {
                                            "title":"17.1.2 Set the Propagation Latency for Each Propagation",
                                            "href":"best-practices-for-propagation.html#GUID-3A3FDAA1-6BFA-425F-9985-E2501CF4D950"
                                        },
                                        {
                                            "title":"17.1.3 Increase the SDU in a Wide Area Network for Better Network Performance",
                                            "href":"best-practices-for-propagation.html#GUID-8B8199EB-360D-4A31-ACDF-629FC2820971"
                                        }
                                    ]
                                },
                                {
                                    "title":"17.2 Best Practices for Propagation Operation",
                                    "href":"best-practices-for-propagation.html#GUID-F419B7E0-A336-4148-B16C-1F286FF928CF",
                                    "topics":[
                                        {
                                            "title":"17.2.1 Restart Broken Propagations",
                                            "href":"best-practices-for-propagation.html#GUID-B35F79D2-496C-42BC-8583-E69E31F5B67B"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"18 Best Practices for Apply",
                            "href":"best-practices-for-apply.html#GUID-B83395F2-C932-49CC-97C4-16717313903C",
                            "topics":[
                                {
                                    "title":"18.1 Best Practices for Destination Database Configuration",
                                    "href":"best-practices-for-apply.html#GUID-0BEDF8CB-6850-467D-9ED2-02A969ACEDD6",
                                    "topics":[
                                        {
                                            "title":"18.1.1 Grant Required Privileges to the Apply User",
                                            "href":"best-practices-for-apply.html#GUID-9E5C73DF-C902-436A-BC9F-002799BF4862"
                                        },
                                        {
                                            "title":"18.1.2 Set Instantiation SCN Values",
                                            "href":"best-practices-for-apply.html#GUID-5D51C000-686F-4839-AA3B-55C8FDB576C6"
                                        },
                                        {
                                            "title":"18.1.3 Configure Conflict Resolution",
                                            "href":"best-practices-for-apply.html#GUID-FBFFE4F9-FFF9-4A9C-8424-0D79A0F1B6A9"
                                        }
                                    ]
                                },
                                {
                                    "title":"18.2 Best Practices for Apply Process Configuration",
                                    "href":"best-practices-for-apply.html#GUID-FD547117-953F-403F-A876-3FEE94ADAD52",
                                    "topics":[
                                        {
                                            "title":"18.2.1 Set Apply Process Parallelism",
                                            "href":"best-practices-for-apply.html#GUID-A0B03AA6-3782-490B-B2C4-FF5E4CA9E637"
                                        },
                                        {
                                            "title":"18.2.2 Consider Allowing Apply Processes to Continue When They Encounter Errors",
                                            "href":"best-practices-for-apply.html#GUID-C219947C-79A7-4249-AB5C-A0F72E893730"
                                        }
                                    ]
                                },
                                {
                                    "title":"18.3 Best Practices for Apply Process Operation",
                                    "href":"best-practices-for-apply.html#GUID-0B57C103-2CB1-4943-A132-7B3DB5A2528A",
                                    "topics":[
                                        {
                                            "title":"18.3.1 Manage Apply Errors",
                                            "href":"best-practices-for-apply.html#GUID-07B9ECBF-0FAA-4DF7-AC85-E73C52253F61"
                                        }
                                    ]
                                }
                            ]
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