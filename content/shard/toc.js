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
                    "href":"preface.html#GUID-9E6EA226-BCDB-4AF3-8A84-F475FE6D1190",
                    "topics":[
                        {
                            "title":"Audience",
                            "href":"preface.html#GUID-8DBDE53A-1B14-4AAC-9A4E-249A92F37250"
                        },
                        {
                            "title":"Documentation Accessibility",
                            "href":"preface.html#GUID-E409CC44-9A8F-4043-82C8-6B95CD939296"
                        },
                        {
                            "title":"Related Documents",
                            "href":"preface.html#GUID-340D403B-D808-4151-A6F9-F53180627F5A"
                        },
                        {
                            "title":"Conventions",
                            "href":"preface.html#GUID-379E23A1-4165-4F6C-A759-9426DE1DD7E8"
                        }
                    ]
                },
                {
                    "title":"Changes in This Release for Oracle Sharding",
                    "href":"changes-in-this-release.html#GUID-337B61E5-4340-4027-82D8-CB3DCF1EF38D",
                    "topics":[
                        {
                            "title":"Changes in Oracle Database 18c",
                            "href":"changes-in-this-release.html#GUID-5C516108-80A6-4027-8289-D6D03D8F0697",
                            "topics":[
                                {
                                    "title":"New Features",
                                    "href":"changes-in-this-release.html#GUID-17301904-C4FC-435E-A762-EBC568226EEB",
                                    "topics":[
                                        {
                                            "title":"User-Defined Sharding Method",
                                            "href":"changes-in-this-release.html#GUID-3A019730-28D7-4C2A-9DE5-BD71F3B0C806"
                                        },
                                        {
                                            "title":"Support for PDBs as Shards",
                                            "href":"changes-in-this-release.html#GUID-392B297D-78F5-4208-96C9-D23BC5A1203E"
                                        },
                                        {
                                            "title":"Support for Oracle GoldenGate Replication",
                                            "href":"changes-in-this-release.html#GUID-898ED281-9961-4CF4-9F37-1A06DED87E6D"
                                        },
                                        {
                                            "title":"Centralized Diagnostics",
                                            "href":"changes-in-this-release.html#GUID-CC9938A3-DBB3-4AA2-AF11-A8B1B8205458"
                                        },
                                        {
                                            "title":"Multi-Shard Query Consistency Level",
                                            "href":"changes-in-this-release.html#GUID-A39CE0A6-6E23-4CE0-84E1-B2B5CCC582DB"
                                        },
                                        {
                                            "title":"Sharding Support for JSON, LOBs and Spatial Objects",
                                            "href":"changes-in-this-release.html#GUID-FC693CE9-B95D-402F-A9D5-8E3256E800AC"
                                        },
                                        {
                                            "title":"Optimizer Enhancements for Multi-Shard Queries",
                                            "href":"changes-in-this-release.html#GUID-764C15CB-9A13-49CC-A513-540F671E2334"
                                        },
                                        {
                                            "title":"Shard Replacement",
                                            "href":"changes-in-this-release.html#GUID-DAD4E69A-C60A-410F-8314-205B3904DAEE"
                                        },
                                        {
                                            "title":"Oracle RAC Sharding",
                                            "href":"changes-in-this-release.html#GUID-A735CABE-CAFA-40FE-9075-C9FF48B75181"
                                        },
                                        {
                                            "title":"UCP Support for Data-Dependent Routing to Oracle Sharding Middle Tiers",
                                            "href":"changes-in-this-release.html#GUID-E8BF8220-3A91-410A-BF52-E0F60DF2597B"
                                        }
                                    ]
                                },
                                {
                                    "title":"Other Changes",
                                    "href":"changes-in-this-release.html#GUID-9A6D4CDA-41FC-429B-8EB9-E02E3C26339E"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">1 </span> Overview of Oracle Sharding",
                    "href":"sharding-overview.html#GUID-0F39B1FB-DCF9-4C8A-A2EA-88705B90C5BF",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">1.1 </span> About Sharding",
                            "href":"sharding-overview.html#GUID-D90D0A33-1BCB-48D8-8193-8FD1C2959371"
                        },
                        {
                            "title":"<span class=\"secnum\">1.2 </span> Benefits of Sharding",
                            "href":"sharding-overview.html#GUID-0D1CBC48-93D0-41A9-9786-4285FE060C97"
                        },
                        {
                            "title":"<span class=\"secnum\">1.3 </span> Components of the Oracle Sharding Architecture",
                            "href":"sharding-overview.html#GUID-3D41F762-BE04-486D-8018-C7A210D809F9"
                        },
                        {
                            "title":"<span class=\"secnum\">1.4 </span> Application Suitability for Sharding",
                            "href":"sharding-overview.html#GUID-DDF69235-8761-44DA-98AC-3080A239E63E"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">2 </span> Sharded Database Schema Design",
                    "href":"sharding-schema-design.html#GUID-1B8DAEE1-A662-4516-9EA9-04FF711211C3",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">2.1 </span> Sharded Tables",
                            "href":"sharding-schema-design.html#GUID-1DBC6C7F-4E0C-47E5-8870-05F829D6C3B3"
                        },
                        {
                            "title":"<span class=\"secnum\">2.2 </span> Sharded Table Family",
                            "href":"sharding-schema-design.html#GUID-4E2E01CA-5103-4F4D-AB2A-79527A62B2E7"
                        },
                        {
                            "title":"<span class=\"secnum\">2.3 </span> Duplicated Tables",
                            "href":"sharding-schema-design.html#GUID-50D56C0A-5185-4F04-A0CA-EAA442E825D3"
                        },
                        {
                            "title":"<span class=\"secnum\">2.4 </span> Non-Table Objects Created on All Shards",
                            "href":"sharding-schema-design.html#GUID-FCD9BB15-6B24-4EF0-A66B-4AE16D5DA286"
                        },
                        {
                            "title":"<span class=\"secnum\">2.5 </span> DDL Execution in a Sharded Database",
                            "href":"sharding-schema-design.html#GUID-FD5760B7-1F77-4A3C-A74C-2C70B2469E16"
                        },
                        {
                            "title":"<span class=\"secnum\">2.6 </span> DDL Syntax Extensions for the Sharded Database",
                            "href":"sharding-schema-design.html#GUID-B69FD5E1-7DDC-4867-9C26-9849C507E8C4"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">3 </span> Physical Organization of a Sharded Database",
                    "href":"sharding-physical-organization.html#GUID-9F237240-F0B3-4860-9A07-16D80CE27352",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">3.1 </span> Sharding as Distributed Partitioning",
                            "href":"sharding-physical-organization.html#GUID-C3C02452-820C-4A00-BAAB-3C0CBCE5F7C4"
                        },
                        {
                            "title":"<span class=\"secnum\">3.2 </span> Partitions, Tablespaces, and Chunks",
                            "href":"sharding-physical-organization.html#GUID-3D0475BE-3F6F-4D2E-8B2E-B1161DBB1A78"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">4 </span> Sharding Methods",
                    "href":"sharding-methods.html#GUID-3B07D91C-CEAA-4170-A94B-ACF47BEE617B",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">4.1 </span> System-Managed Sharding",
                            "href":"sharding-methods.html#GUID-37F20817-EFD5-400B-A082-41171C0B6D1C"
                        },
                        {
                            "title":"<span class=\"secnum\">4.2 </span> User-Defined Sharding",
                            "href":"sharding-methods.html#GUID-DA34E219-A601-40B3-A6E4-6545CA2EBB0B"
                        },
                        {
                            "title":"<span class=\"secnum\">4.3 </span> Composite Sharding",
                            "href":"sharding-methods.html#GUID-1FCC7F96-59BF-4C8D-B71A-6A307D7283EA"
                        },
                        {
                            "title":"<span class=\"secnum\">4.4 </span> Using Subpartitions with Sharding",
                            "href":"sharding-methods.html#GUID-11AE3897-003D-4723-89C4-23AD5A837B89"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">5 </span> Design Considerations for Sharded Database Applications",
                    "href":"sharding-application-development.html#GUID-4EB511F9-05AB-4E3F-9B69-D59F21799FFF",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">5.1 </span> Considerations for Sharded Database Schema Design",
                            "href":"sharding-application-development.html#GUID-42B2CA52-76DF-4F51-9CB6-51664102408F"
                        },
                        {
                            "title":"<span class=\"secnum\">5.2 </span> Developing Applications for Oracle Sharding",
                            "href":"sharding-application-development.html#GUID-74063498-18A8-47D7-A2A2-A36E6C3EB682"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">6 </span> Request Routing in a Sharded Database Environment",
                    "href":"sharding-data-routing.html#GUID-7001A9CC-B681-4DFA-B461-6FD653D9D62D",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">6.1 </span> Direct Routing to a Shard",
                            "href":"sharding-data-routing.html#GUID-64CAD794-FAAA-406B-9E20-0C35E96D3FA8",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">6.1.1 </span> About Direct Routing to a Shard",
                                    "href":"sharding-data-routing.html#GUID-2C0F1289-4B10-4282-A652-4C661D0A6FB4"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.1.2 </span> Sharding APIs",
                                    "href":"sharding-data-routing.html#GUID-A49CEDDD-49F7-49EF-B83B-74048A63021E"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">6.2 </span> Queries and DMLs with Proxy Routing in a Sharded Database",
                            "href":"sharding-data-routing.html#GUID-EFC30D99-D4A8-40F6-A0DC-D15FE7BDC7F4",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">6.2.1 </span> About Proxy Routing in a Sharded Database",
                                    "href":"sharding-data-routing.html#GUID-7227ADD2-B9B3-4CB4-B0A8-C385415EECF1"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.2.2 </span> Oracle Sharding Coordinator",
                                    "href":"sharding-data-routing.html#GUID-9C13DCC4-0018-4049-94D8-70F518008504",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">6.2.2.1 </span> Resiliency of Proxy Routing",
                                            "href":"sharding-data-routing.html#GUID-8CB6442A-9326-4242-892A-4383E05C1C48"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">6.2.3 </span> Querying and DMLs Using Proxy Routing",
                                    "href":"sharding-data-routing.html#GUID-E58EA3C1-8EB6-4F51-88BD-FC887035A624"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.2.4 </span> Proxy Routing for Single-Shard Queries",
                                    "href":"sharding-data-routing.html#GUID-1BC28361-73D8-460E-A5E4-C11FCD721ECC"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.2.5 </span> Proxy Routing for Multi-Shard Queries",
                                    "href":"sharding-data-routing.html#GUID-E3CF0022-FA38-4DD0-A5D5-7A409EA45F76",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">6.2.5.1 </span> Specifying Consistency Levels in a Multi-Shard Query",
                                            "href":"sharding-data-routing.html#GUID-902C8750-EF4E-4551-AF75-AC4B95FC7D03"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">6.2.6 </span> Supported Query Shapes in Proxy Routing",
                                    "href":"sharding-data-routing.html#GUID-EE5D2C35-6CB2-45CC-B936-CABA2C329E1B"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.2.7 </span> Execution Plans for Proxy Routing",
                                    "href":"sharding-data-routing.html#GUID-51377035-217B-4624-88CD-A5D5DE125606"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">6.3 </span> Creating Affinity Between Middle-Tier Connection Pools and Shards",
                            "href":"sharding-data-routing.html#GUID-F5D3C0B6-83F9-457A-97A9-429AC9EE4550"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">7 </span> Shard-Level High Availability",
                    "href":"sharding-high-availability.html#GUID-C668B8C7-0F94-4F85-B8E1-A6B91548BBB6",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">7.1 </span> About Sharding and Replication",
                            "href":"sharding-high-availability.html#GUID-133A4C15-FCD5-46E3-B33B-0DB3EBE54064",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">7.1.1 </span> When To Choose Oracle GoldenGate for Shard High Availability",
                                    "href":"sharding-high-availability.html#GUID-E65AA060-0C3D-4F4F-BE9F-4BF1FD3967FB"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">7.2 </span> Using Oracle Data Guard with a Sharded Database",
                            "href":"sharding-high-availability.html#GUID-52E55FFE-2AF7-45B0-B29A-6664D6CB78AB"
                        },
                        {
                            "title":"<span class=\"secnum\">7.3 </span> Using Oracle GoldenGate with a Sharded Database",
                            "href":"sharding-high-availability.html#GUID-4FC0AC46-0B8B-4670-BBE4-052228492C72"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">8 </span> Sharded Database Deployment",
                    "href":"sharding-deployment.html#GUID-F99B8742-4089-4E77-87D4-4691EA932207",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">8.1 </span> Introduction to Sharded Database Deployment",
                            "href":"sharding-deployment.html#GUID-059FD35C-C1C2-4B14-9A76-B3632A6080DC",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">8.1.1 </span> Choosing a Deployment Method",
                                    "href":"sharding-deployment.html#GUID-F9C2D239-0F1C-4805-A7FA-1D3D5EBC61FA"
                                },
                                {
                                    "title":"<span class=\"secnum\">8.1.2 </span> Using Oracle Multitenant with Oracle Sharding",
                                    "href":"sharding-deployment.html#GUID-4FFB5665-B925-4DB6-ACDD-807D6E699365"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">8.2 </span> Oracle Sharding Prerequisites",
                            "href":"sharding-deployment.html#GUID-9EC92076-7DD0-41ED-9E0C-B96CF074118D"
                        },
                        {
                            "title":"<span class=\"secnum\">8.3 </span> Installing Oracle Database Software",
                            "href":"sharding-deployment.html#GUID-3F3A387E-FAC5-467C-A45E-4A7DFF95B62D"
                        },
                        {
                            "title":"<span class=\"secnum\">8.4 </span> Installing the Shard Director Software",
                            "href":"sharding-deployment.html#GUID-E1F8A199-D0D2-4ABA-94EA-E314E83A966F"
                        },
                        {
                            "title":"<span class=\"secnum\">8.5 </span> Creating the Shard Catalog Database",
                            "href":"sharding-deployment.html#GUID-9A0F96A7-4D52-4B3A-8538-6DA2AB5A9BFB"
                        },
                        {
                            "title":"<span class=\"secnum\">8.6 </span> Setting Up the Oracle Sharding Management and Routing Tier",
                            "href":"sharding-deployment.html#GUID-96ABB404-844C-457E-9C10-2D5C352D3928"
                        },
                        {
                            "title":"<span class=\"secnum\">8.7 </span> Creating and Deploying a System-Managed Sharded Database",
                            "href":"sharding-deployment.html#GUID-A2492CE2-A98C-4F59-9946-889FFD0FEBA9",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">8.7.1 </span> Deploying a System-Managed Sharded Database",
                                    "href":"sharding-deployment.html#GUID-4E77F1B8-F665-40C4-B4AC-B321C7302AA9"
                                },
                                {
                                    "title":"<span class=\"secnum\">8.7.2 </span> Creating a Schema for a System-Managed Sharded Database",
                                    "href":"sharding-deployment.html#GUID-61B495D3-4482-47E2-937E-B7E03286F565"
                                },
                                {
                                    "title":"<span class=\"secnum\">8.7.3 </span> System-Managed SDB Demo Application",
                                    "href":"sharding-deployment.html#GUID-A3433C97-90F8-4CBF-ADA8-2AE2145612DB"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">8.8 </span> Creating and Deploying a User-Defined SDB",
                            "href":"sharding-deployment.html#GUID-6E11AA09-B7D3-45FB-9693-33B1329F7396",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">8.8.1 </span> Deploying a User-Defined SDB",
                                    "href":"sharding-deployment.html#GUID-D0BC77A5-B733-4EF5-AF41-7A3E4D79BD65"
                                },
                                {
                                    "title":"<span class=\"secnum\">8.8.2 </span> Creating a Schema for a User-Defined SDB",
                                    "href":"sharding-deployment.html#GUID-97C5E0B3-F870-4F4E-9507-9644A73E6C76"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">8.9 </span> Creating and Deploying a Composite SDB",
                            "href":"sharding-deployment.html#GUID-C43E1E4A-DA8F-4556-9EE7-39097C0276BC",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">8.9.1 </span> Deploying a Composite SDB",
                                    "href":"sharding-deployment.html#GUID-BD9885B8-55A8-45F8-B29D-5D89BF3DB1CE"
                                },
                                {
                                    "title":"<span class=\"secnum\">8.9.2 </span> Creating a Schema for a Composite SDB",
                                    "href":"sharding-deployment.html#GUID-D2098302-8636-41E7-ADEA-07099C882F32"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">8.10 </span> Using Transparent Data Encryption with Oracle Sharding",
                            "href":"sharding-deployment.html#GUID-ACFBA061-F74B-4C31-9596-8BD7451846F3",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">8.10.1 </span> Creating a Single Encryption Key on All Shards",
                                    "href":"sharding-deployment.html#GUID-C4E40922-C53E-4BEB-8C01-8D323805B89E"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">9 </span> Migrating Data to a Sharded Database",
                    "href":"sharding-loading-data.html#GUID-6140925F-6192-4C6F-9ADC-BC2332ADA3B0",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">9.1 </span> About Migrating Data to a Sharded Database",
                            "href":"sharding-loading-data.html#GUID-041069C8-FA7B-4BA5-BFB8-B5A949DA12A9"
                        },
                        {
                            "title":"<span class=\"secnum\">9.2 </span> General Guidelines for Loading Data into a Sharded Database",
                            "href":"sharding-loading-data.html#GUID-6E455646-F4AA-4992-B50B-58A1290355FE"
                        },
                        {
                            "title":"<span class=\"secnum\">9.3 </span> Migrating the Schema",
                            "href":"sharding-loading-data.html#GUID-DD36B05A-AC5F-488D-9012-70043ED3E7EE"
                        },
                        {
                            "title":"<span class=\"secnum\">9.4 </span> Preparing the Source Database",
                            "href":"sharding-loading-data.html#GUID-18D1592D-3A41-4C81-ABEF-86527A610A3D"
                        },
                        {
                            "title":"<span class=\"secnum\">9.5 </span> Preparing the Target Sharded Database",
                            "href":"sharding-loading-data.html#GUID-59B5EABA-3C10-4329-B662-9E17F2303498"
                        },
                        {
                            "title":"<span class=\"secnum\">9.6 </span> Migrating Your Data",
                            "href":"sharding-loading-data.html#GUID-B464BEB3-AEB7-4F6D-8328-C25F69FD223F"
                        },
                        {
                            "title":"<span class=\"secnum\">9.7 </span> Migrating Your Application",
                            "href":"sharding-loading-data.html#GUID-FD50835F-514F-4E74-95D3-BD0B4A6B0F20"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">10 </span> Sharded Database Lifecycle Management",
                    "href":"sharding-lifecycle-management.html#GUID-1A3B887E-148D-4167-81B5-B0FA35746E4B",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">10.1 </span> Managing the Sharding-Enabled Stack",
                            "href":"sharding-lifecycle-management.html#GUID-2C97E1C6-D57C-45F1-9847-8ADD626EE207",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">10.1.1 </span> Starting Up the Sharding-Enabled Stack",
                                    "href":"sharding-lifecycle-management.html#GUID-7D399EDE-4C93-4F76-AC4D-3E64A6E3A595"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.1.2 </span> Shutting Down the Sharding-Enabled Stack",
                                    "href":"sharding-lifecycle-management.html#GUID-803B09A1-DFD2-4857-849A-8FEE3D776C22"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">10.2 </span> Monitoring a Sharded Database",
                            "href":"sharding-lifecycle-management.html#GUID-E23CF5A3-2A30-47D3-8F61-F625F3518A1C",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">10.2.1 </span> Monitoring a Sharded Database with GDSCTL",
                                    "href":"sharding-lifecycle-management.html#GUID-9A68D887-EC8A-4D06-84A2-1653C8341708"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.2.2 </span> Monitoring a Sharded Database with Enterprise Manager Cloud Control",
                                    "href":"sharding-lifecycle-management.html#GUID-10E66462-C6B2-4C6B-900C-AE909105FA8F",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">10.2.2.1 </span> Discovering Sharded Database Components",
                                            "href":"sharding-lifecycle-management.html#GUID-6D7959C7-60B6-4471-98E2-E4918B2BCC66"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">10.2.3 </span> Querying System Objects Across Shards",
                                    "href":"sharding-lifecycle-management.html#GUID-46B36EC1-90BA-403F-9D5B-BD7499199C13"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">10.3 </span> Backing Up and Recovering a Sharded Database",
                            "href":"sharding-lifecycle-management.html#GUID-99A32370-00BD-4C30-A2DB-19F4EA168064"
                        },
                        {
                            "title":"<span class=\"secnum\">10.4 </span> Modifying a Sharded Database Schema",
                            "href":"sharding-lifecycle-management.html#GUID-8DF6BEA5-42AE-42FF-980B-949EF15BF7DA"
                        },
                        {
                            "title":"<span class=\"secnum\">10.5 </span> Managing Sharded Database Software Versions",
                            "href":"sharding-lifecycle-management.html#GUID-95B0C1F3-D7F7-43F8-84B2-1DDDDF5F8380",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">10.5.1 </span> Patching and Upgrading a Sharded Database",
                                    "href":"sharding-lifecycle-management.html#GUID-6117DFCF-9C21-4730-9B00-131ACA322618"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.5.2 </span> Upgrading Sharded Database Components",
                                    "href":"sharding-lifecycle-management.html#GUID-62AC31EB-2FEE-412B-9DF0-2C235BB32A2A"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.5.3 </span> Downgrading a Sharded Database",
                                    "href":"sharding-lifecycle-management.html#GUID-49C60AEC-137C-47F3-AD75-24EB81F08AB4"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">10.6 </span> Shard Management",
                            "href":"sharding-lifecycle-management.html#GUID-85D98DBC-E4CA-4C11-B887-650595E6A8CB",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">10.6.1 </span> About Adding Shards",
                                    "href":"sharding-lifecycle-management.html#GUID-6BEF1886-33D6-40AF-ACB0-DE5B6E0439C6"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.6.2 </span> Resharding and Hot Spot Elimination",
                                    "href":"sharding-lifecycle-management.html#GUID-B09D6699-D7D1-4A44-B5CD-506AF997F2C6"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.6.3 </span> Removing a Shard From the Pool",
                                    "href":"sharding-lifecycle-management.html#GUID-68815552-B995-419E-86B5-7CDF21D3D95C"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.6.4 </span> Adding Standby Shards",
                                    "href":"sharding-lifecycle-management.html#GUID-18B880AE-68F1-4784-AFBA-EE1B53315096"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.6.5 </span> Managing Shards with Oracle Enterprise Manager Cloud Control",
                                    "href":"sharding-lifecycle-management.html#GUID-39ADA215-630C-4F6E-9EB4-81786A6E4C08",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">10.6.5.1 </span> Validating a Shard",
                                            "href":"sharding-lifecycle-management.html#GUID-308240CC-999B-4AE9-A0B3-555679816CEB"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">10.6.5.2 </span> Adding Primary Shards",
                                            "href":"sharding-lifecycle-management.html#GUID-67BCDEA9-29CC-41A2-986C-F45325E77F41"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">10.6.5.3 </span> Adding Standby Shards",
                                            "href":"sharding-lifecycle-management.html#GUID-387A011C-6429-47A9-AD7D-C371C56C2D52"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">10.6.5.4 </span> Deploying Shards",
                                            "href":"sharding-lifecycle-management.html#GUID-4A89ADCE-5486-40E8-AF31-8D31EC2FC27D"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">10.6.6 </span> Managing Shards with GDSCTL",
                                    "href":"sharding-lifecycle-management.html#GUID-4D5E555A-6B3F-4389-9705-6F6E7595F8CD",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">10.6.6.1 </span> Validating a Shard",
                                            "href":"sharding-lifecycle-management.html#GUID-E00AFC57-26DC-4324-9E0B-058242AD74A1"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">10.6.6.2 </span> Adding Shards to a System-Managed SDB",
                                            "href":"sharding-lifecycle-management.html#GUID-37E6DB26-3156-4348-B69D-4BC5FB628702"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">10.6.6.3 </span> Replacing a Shard",
                                            "href":"sharding-lifecycle-management.html#GUID-628FDBEA-9CE9-4C42-9693-3FF294E3B8B9"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">10.7 </span> Chunk Management",
                            "href":"sharding-lifecycle-management.html#GUID-9F8CEDA8-42ED-4039-ADF7-608D0763E3A8",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">10.7.1 </span> About Moving Chunks",
                                    "href":"sharding-lifecycle-management.html#GUID-623BEA35-8288-40B5-8D3B-B9F9B0FE5837"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.7.2 </span> Moving Chunks",
                                    "href":"sharding-lifecycle-management.html#GUID-253313C9-D7F3-47FF-AEE8-25E02AAE585F"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.7.3 </span> About Splitting Chunks",
                                    "href":"sharding-lifecycle-management.html#GUID-E76B23E8-B7DA-4EF6-8DBF-C44418A96B44"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.7.4 </span> Splitting Chunks",
                                    "href":"sharding-lifecycle-management.html#GUID-145EACB4-5D10-4226-AE19-FC78EF2626A0"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">10.8 </span> Shard Director Management",
                            "href":"sharding-lifecycle-management.html#GUID-493D8985-89B3-4B96-B84B-F2BFF95A57D5",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">10.8.1 </span> Creating a Shard Director",
                                    "href":"sharding-lifecycle-management.html#GUID-A678EA35-344C-45CD-BAA5-D542022E69FC"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.8.2 </span> Editing a Shard Director Configuration",
                                    "href":"sharding-lifecycle-management.html#GUID-D7381484-75D6-426E-A14E-D3930A45E632"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.8.3 </span> Removing a Shard Director",
                                    "href":"sharding-lifecycle-management.html#GUID-DDE156D7-77FD-45F4-A3C4-0EAA5630086F"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">10.9 </span> Region Management",
                            "href":"sharding-lifecycle-management.html#GUID-90BD3394-3D65-4DDF-B8C8-662CD4E825C2",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">10.9.1 </span> Creating a Region",
                                    "href":"sharding-lifecycle-management.html#GUID-78074F56-69A9-43E1-938E-498BFA8D8D19"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.9.2 </span> Editing a Region Configuration",
                                    "href":"sharding-lifecycle-management.html#GUID-BA2E8126-195A-46DE-B592-8298397530E6"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.9.3 </span> Removing a Region",
                                    "href":"sharding-lifecycle-management.html#GUID-0216F896-7807-49C3-9384-6C27B678F161"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">10.10 </span> Shardspace Management",
                            "href":"sharding-lifecycle-management.html#GUID-F034CE27-6F6B-4C0D-ACE6-15FC14209D06",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">10.10.1 </span> Creating a Shardspace",
                                    "href":"sharding-lifecycle-management.html#GUID-51DD2C36-6578-4474-B775-BA8850A345FD"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.10.2 </span> Adding a Shardspace to a Composite Sharded Database",
                                    "href":"sharding-lifecycle-management.html#GUID-117CB323-68C1-4180-9F93-4A01D31BA3AF"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">10.11 </span> Shardgroup Management",
                            "href":"sharding-lifecycle-management.html#GUID-C9885B8A-1588-4EA1-AB51-24628A42002E",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">10.11.1 </span> Creating a Shardgroup",
                                    "href":"sharding-lifecycle-management.html#GUID-10DC71A4-AD54-4C1E-9F37-808037225C99"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">10.12 </span> Services Management",
                            "href":"sharding-lifecycle-management.html#GUID-84C8DF7F-0136-4FA5-85C9-AEDB9403E972",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">10.12.1 </span> Creating a Service",
                                    "href":"sharding-lifecycle-management.html#GUID-C13C94A5-064E-41D9-ACFB-52F703056DD2"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">11 </span> Troubleshooting Oracle Sharding",
                    "href":"sharding-troubleshooting.html#GUID-629262E5-7910-4690-A726-A565C59BA73E",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">11.1 </span> Oracle Sharding Tracing and Debug Information",
                            "href":"sharding-troubleshooting.html#GUID-8D44BB2E-40C5-454F-A864-8004B1FC930D",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">11.1.1 </span> Enabling Tracing for Oracle Sharding",
                                    "href":"sharding-troubleshooting.html#GUID-6BA8B440-BEFE-4F7C-A8BB-70CCC57BD11D"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.1.2 </span> Where to Find Oracle Sharding Alert Logs and Trace Files",
                                    "href":"sharding-troubleshooting.html#GUID-56202B11-CDF5-48DD-A112-7CD562D36C65"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">11.2 </span> Common Error Patterns and Resolutions for Sharded Databases",
                            "href":"sharding-troubleshooting.html#GUID-2DD22217-BDA6-4C07-A4C6-19081960B743",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">11.2.1 </span> Issues Starting Remote Scheduler Agent",
                                    "href":"sharding-troubleshooting.html#GUID-134A3FCD-4F19-4355-984E-F157EBC7802F"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.2.2 </span> Shard Director Fails to Start",
                                    "href":"sharding-troubleshooting.html#GUID-96F666F4-953B-411C-9537-0510062A8B6E"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.2.3 </span> Errors From Shards Created with CREATE SHARD",
                                    "href":"sharding-troubleshooting.html#GUID-90876128-74A2-48EE-8EFD-3E2F274B79D9"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.2.4 </span> Issues Using Create Shard",
                                    "href":"sharding-troubleshooting.html#GUID-E5F09B41-2304-4139-B1C1-479E0EE1681D"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.2.5 </span> Issues Using Deploy Command",
                                    "href":"sharding-troubleshooting.html#GUID-924E1530-F486-4049-B674-A275C3841D3A"
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