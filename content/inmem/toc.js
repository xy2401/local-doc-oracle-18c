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
                    "href":"preface.html#GUID-5F15F0CC-29ED-4DC0-9EE8-2659AC1B10DB",
                    "topics":[
                        {
                            "title":"Audience",
                            "href":"preface.html#GUID-5B76CDC4-5DCA-4985-9A01-BABAC5FBA80A"
                        },
                        {
                            "title":"Documentation Accessibility",
                            "href":"preface.html#GUID-E409CC44-9A8F-4043-82C8-6B95CD939296"
                        },
                        {
                            "title":"Related Documents",
                            "href":"preface.html#GUID-D9438CD9-E379-427A-BDD4-D76D33926C52"
                        },
                        {
                            "title":"Conventions",
                            "href":"preface.html#GUID-5319E198-FAF5-4F76-BB07-AE75B148ED81"
                        }
                    ]
                },
                {
                    "title":"Changes in This Release for Oracle Database In-Memory Guide",
                    "href":"release-changes.html#GUID-4D008B24-963D-49D9-B7B8-FCC94D0112D0",
                    "topics":[
                        {
                            "title":"Changes in Oracle Database Release 18c, Version 18.1",
                            "href":"release-changes.html#GUID-6C8A38D5-C532-4E7F-AA11-BCCA95B4C194",
                            "topics":[
                                {
                                    "title":"New Features",
                                    "href":"release-changes.html#GUID-24F117E4-9FFA-4B2B-8048-622BE14D9844"
                                }
                            ]
                        },
                        {
                            "title":"Changes in Oracle Database 12c Release 2 (12.2.0.1)",
                            "href":"release-changes.html#GUID-A3283C2A-9B05-4526-B46D-088B0C0FE859",
                            "topics":[
                                {
                                    "title":"New Features",
                                    "href":"release-changes.html#GUID-969EBFFC-B4A9-4423-944D-320E540D804B"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part I Oracle Database In-Memory Concepts",
                    "href":"concepts-for-the-im-column-store.html#GUID-5A72B48A-8427-41AE-9220-E46042BC90C4",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">1 </span> Introduction to Oracle Database In-Memory",
                            "href":"intro-to-in-memory-column-store.html#GUID-BFA53515-7643-41E5-A296-654AB4A9F9E7",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">1.1 </span> Challenges for Analytic Applications",
                                    "href":"intro-to-in-memory-column-store.html#GUID-AB46CCB2-C8A5-4411-A761-B6797DC81997"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.2 </span> The Single-Format Approach",
                                    "href":"intro-to-in-memory-column-store.html#GUID-8829AB0F-4395-4899-A6C4-DD98632EE951"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.3 </span> The Oracle Database In-Memory Solution",
                                    "href":"intro-to-in-memory-column-store.html#GUID-B4DC96ED-0907-4974-9347-2FFBC24EBBDB",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">1.3.1 </span> What Is Database In-Memory?",
                                            "href":"intro-to-in-memory-column-store.html#GUID-4D7DF329-6C4F-4717-8A79-386D33BB773C",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">1.3.1.1 </span> IM Column Store",
                                                    "href":"intro-to-in-memory-column-store.html#GUID-92EBDBFF-F85C-4510-9798-7CB69D69397D"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">1.3.1.2 </span> Advanced Query Optimizations",
                                                    "href":"intro-to-in-memory-column-store.html#GUID-0E4FE17F-3B8E-4601-AE6D-4D3E23180C8C"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">1.3.1.3 </span> High Availability Support",
                                                    "href":"intro-to-in-memory-column-store.html#GUID-47E1ADDB-1B89-4038-9FBE-FFE7E6BDACDF"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">1.3.2 </span> Improved Performance for Analytic Queries",
                                            "href":"intro-to-in-memory-column-store.html#GUID-692158BA-8A08-4CAB-97EA-CD2C6EBEC54D",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">1.3.2.1 </span> Improved Performance for Data Scans",
                                                    "href":"intro-to-in-memory-column-store.html#GUID-F3B15B7D-E753-42FF-9F3E-31B6289006DE"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">1.3.2.2 </span> Improved Performance for Joins",
                                                    "href":"intro-to-in-memory-column-store.html#GUID-E81427FA-A601-41BE-814C-068399060945"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">1.3.2.3 </span> Improved Performance for Aggregation",
                                                    "href":"intro-to-in-memory-column-store.html#GUID-3DAB2C9A-EEFC-4961-9D33-C16E3F13CB51"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">1.3.3 </span> Improved Performance for Mixed Workloads",
                                            "href":"intro-to-in-memory-column-store.html#GUID-FAFE6FAC-5F41-47DC-9F07-4EA9CF136725"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">1.3.4 </span> In-Memory Support for Exadata Flash Cache",
                                            "href":"intro-to-in-memory-column-store.html#GUID-3C7A9421-141C-43F8-9CFC-D0D516E19D3B"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">1.3.5 </span> High Availability Support",
                                            "href":"intro-to-in-memory-column-store.html#GUID-E5703810-9D3A-42CB-B38D-D7851D322938"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">1.3.6 </span> Ease of Adoption",
                                            "href":"intro-to-in-memory-column-store.html#GUID-602270F6-E676-4EFC-A732-6DADC1645933"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">1.4 </span> Prerequisites for Database In-Memory",
                                    "href":"intro-to-in-memory-column-store.html#GUID-50E76567-3AD4-4886-A3B0-A9089C67F9A7"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.5 </span> Principal Tasks for Database In-Memory",
                                    "href":"intro-to-in-memory-column-store.html#GUID-CF71CBF3-C82B-40C0-A4C4-A9E31919D610"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.6 </span> Tools for the IM Column Store",
                                    "href":"intro-to-in-memory-column-store.html#GUID-54764B12-9A27-405B-AD02-8BF5140CA078",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">1.6.1 </span> In-Memory Advisor",
                                            "href":"intro-to-in-memory-column-store.html#GUID-8BAFE308-549E-4D81-AF93-5B82C6DBC9E4"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">1.6.2 </span> Cloud Control Pages for the IM Column Store",
                                            "href":"intro-to-in-memory-column-store.html#GUID-C6815A1E-5F2D-4D33-A8BE-12E0FB23573E"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">1.6.3 </span> Oracle Compression Advisor",
                                            "href":"intro-to-in-memory-column-store.html#GUID-197500CB-7C77-4F55-A0F7-945A6D3A3673"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">1.6.4 </span> Oracle Data Pump and the IM Column Store",
                                            "href":"intro-to-in-memory-column-store.html#GUID-9B555677-823F-4F30-B918-BD4E72E6FD90"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2 </span> In-Memory Column Store Architecture",
                            "href":"in-memory-column-store-architecture.html#GUID-EEA265EE-8FBA-4457-8C3F-315B9EEA2224",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.1 </span> Dual-Format: Column and Row",
                                    "href":"in-memory-column-store-architecture.html#GUID-FF2499C5-C582-496A-B547-CFE49C84185E",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.1.1 </span> Columnar Data in the In-Memory Area",
                                            "href":"in-memory-column-store-architecture.html#GUID-2D072622-139C-4617-88ED-F07D530B8E1E",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">2.1.1.1 </span> Size of the In-Memory Area",
                                                    "href":"in-memory-column-store-architecture.html#GUID-C5D36B41-A8C7-4A09-A9B1-55748922EC09"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">2.1.1.2 </span> Memory Pools in the In-Memory Area",
                                                    "href":"in-memory-column-store-architecture.html#GUID-74B9B6CD-CF94-4883-ABF0-8EFCE4E69BC8"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.1.2 </span> Row Data in the Database Buffer Cache",
                                            "href":"in-memory-column-store-architecture.html#GUID-93893C03-EEBD-46E5-8C08-7E120EB643A6"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.2 </span> In-Memory Storage Units",
                                    "href":"in-memory-column-store-architecture.html#GUID-D61E56A9-B152-49D1-9956-BE9E882E3DE1",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.2.1 </span> In-Memory Compression Units (IMCUs)",
                                            "href":"in-memory-column-store-architecture.html#GUID-50A30EC3-1CD1-4BFC-9BD1-9AC55D0B4AAE",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">2.2.1.1 </span> IMCUs and Schema Objects",
                                                    "href":"in-memory-column-store-architecture.html#GUID-5DFDC353-CE50-4E26-9DFD-E6046A1582A8",
                                                    "topics":[
                                                        {
                                                            "title":"<span class=\"secnum\">2.2.1.1.1 </span> In-Memory Compression",
                                                            "href":"in-memory-column-store-architecture.html#GUID-E652C13F-FD52-49D2-B968-3B1A03F7F1ED"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">2.2.1.1.2 </span> IMCUs and Rows",
                                                            "href":"in-memory-column-store-architecture.html#GUID-C1CAECB5-87F3-49E4-9F90-488A6834764F"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">2.2.1.2 </span> Column Compression Units (CUs)",
                                                    "href":"in-memory-column-store-architecture.html#GUID-DD7106DB-0BCE-4251-B808-8341507FDFC7",
                                                    "topics":[
                                                        {
                                                            "title":"<span class=\"secnum\">2.2.1.2.1 </span> Structure of a CU",
                                                            "href":"in-memory-column-store-architecture.html#GUID-DDF4E628-0A07-42F3-8B8E-2B166F6A824E"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">2.2.1.2.2 </span> Local Dictionary",
                                                            "href":"in-memory-column-store-architecture.html#GUID-729DBF0D-7DE4-4B1A-886E-8BE5F6017DAB"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">2.2.1.3 </span> In-Memory Storage Indexes",
                                                    "href":"in-memory-column-store-architecture.html#GUID-A38FF2B6-506E-412A-9FE5-1CE709556379"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.2.2 </span> Snapshot Metadata Units (SMUs)",
                                            "href":"in-memory-column-store-architecture.html#GUID-850DDEFB-6B9F-461B-AAF0-DB6DAFAFCBA2",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">2.2.2.1 </span> IMCUs and SMUs",
                                                    "href":"in-memory-column-store-architecture.html#GUID-344E6053-2B12-4E8D-B37C-7B74D8F02DCF"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">2.2.2.2 </span> Transaction Journal",
                                                    "href":"in-memory-column-store-architecture.html#GUID-2CA38EA0-26A0-44E7-97AD-A4156964BDC1"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.2.3 </span> In-Memory Expression Units (IMEUs)",
                                            "href":"in-memory-column-store-architecture.html#GUID-E1A74436-E719-4FC3-A141-41B160792E51"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.3 </span> Expression Statistics Store (ESS)",
                                    "href":"in-memory-column-store-architecture.html#GUID-BF90E4D7-DA7B-4B2B-A0BB-AE88E0C39757"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.4 </span> In-Memory Process Architecture",
                                    "href":"in-memory-column-store-architecture.html#GUID-15B0EEBC-31F6-4192-957A-56D79B7E63E2",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.4.1 </span> In-Memory Coordinator Process (IMCO)",
                                            "href":"in-memory-column-store-architecture.html#GUID-6ABDC0F5-0932-43D1-97F5-E827A102F23E"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.4.2 </span> Space Management Worker Processes (Wnnn)",
                                            "href":"in-memory-column-store-architecture.html#GUID-C91A11F9-CFB7-4919-A8D7-8572ED1CAEF3"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.4.3 </span> In-Memory Dynamic Scans",
                                            "href":"in-memory-column-store-architecture.html#GUID-68EA52F3-D62F-474D-99FB-729A6AE43D70",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">2.4.3.1 </span> Purpose of IM Dynamic Scans",
                                                    "href":"in-memory-column-store-architecture.html#GUID-F2F87876-E138-43D1-ADD6-D9A5D5903C59"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">2.4.3.2 </span> How IM Dynamic Scans Work",
                                                    "href":"in-memory-column-store-architecture.html#GUID-CB4A29B8-46EA-417C-B9CC-6F65295A69E9",
                                                    "topics":[
                                                        {
                                                            "title":"<span class=\"secnum\">2.4.3.2.1 </span> About Lightweight Threads",
                                                            "href":"in-memory-column-store-architecture.html#GUID-4DDD1A53-D634-4201-B46F-626DAE16A447"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">2.4.3.2.2 </span> When the Database Considers IM Dynamic Scans",
                                                            "href":"in-memory-column-store-architecture.html#GUID-9DD695DF-A4A9-408C-A7FE-9AC001B0590A"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">2.4.3.2.3 </span> How IM Dynamic Scans Work",
                                                            "href":"in-memory-column-store-architecture.html#GUID-0D557669-B378-4514-A0D3-FBE054AA9F57"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">2.4.3.3 </span> Interface for IM Dynamic Scans",
                                                    "href":"in-memory-column-store-architecture.html#GUID-C5D44481-13B9-4C6F-BD6E-B6E75A901BA5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5 </span> CPU Architecture: SIMD Vector Processing",
                                    "href":"in-memory-column-store-architecture.html#GUID-8DCA5CC5-69F6-4F26-AE94-49810F742310",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.5.1 </span> SIMD and Oracle LOBs",
                                            "href":"in-memory-column-store-architecture.html#GUID-3F150041-3EBC-4EC7-AE95-4B17CD5960EA"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.5.2 </span> SIMD and Oracle Numbers",
                                            "href":"in-memory-column-store-architecture.html#GUID-C7D70CB1-8BD8-4252-89ED-59C88F7C9534"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.5.3 </span> SIMD and Exadata Smart Flash Cache",
                                            "href":"in-memory-column-store-architecture.html#GUID-A48C2F4B-52E7-4BB7-8649-D315C78413C4"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part II Configuring the IM Column Store",
                    "href":"configuring-the-im-column-store.html#GUID-8844C889-E381-4B77-8A51-7AA6462B14D7",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">3 </span> Enabling and Sizing the IM Column Store",
                            "href":"enabling-the-im-column-store.html#GUID-3CC8549A-A394-49CC-A907-AEB471A19CB3",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.1 </span> Overview of Enabling the IM Column Store",
                                    "href":"enabling-the-im-column-store.html#GUID-B48BA16D-CDBF-414F-A3BC-8442791F8480"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.2 </span> Estimating the Required Size of the IM Column Store",
                                    "href":"enabling-the-im-column-store.html#GUID-C8BE1A75-CD24-4573-9747-C25D88E3106F"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.3 </span> Enabling the IM Column Store for a Database",
                                    "href":"enabling-the-im-column-store.html#GUID-6A220D69-66BA-4C50-8FAB-D5004C96B215"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.4 </span> Increasing the Size of the IM Column Store Dynamically",
                                    "href":"enabling-the-im-column-store.html#GUID-48581A2D-1650-410D-8E02-1D8250CCDBED"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.5 </span> Disabling the IM Column Store",
                                    "href":"enabling-the-im-column-store.html#GUID-B42D6CAF-8B02-4C17-8686-C3E58C170BDE"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">4 </span> Enabling Objects for In-Memory Population",
                            "href":"populating-objects-in-memory.html#GUID-C5F856BF-70E3-41C6-A1BA-1E94D7D230B8",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">4.1 </span> About In-Memory Population",
                                    "href":"populating-objects-in-memory.html#GUID-BFD476E7-C70D-4906-8B10-D33BC1E768C0",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">4.1.1 </span> Purpose of In-Memory Population",
                                            "href":"populating-objects-in-memory.html#GUID-F1395406-6385-4FB4-9A9F-4144183DCC3B"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.1.2 </span> How In-Memory Population Works",
                                            "href":"populating-objects-in-memory.html#GUID-29A8026E-FACC-494B-9BC9-E0D2C9E6B4C3",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">4.1.2.1 </span> Prioritization of In-Memory Population",
                                                    "href":"populating-objects-in-memory.html#GUID-DE12F0E2-8BEC-4326-A816-D812E54A3D12"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">4.1.2.2 </span> How Background Processes Populate IMCUs",
                                                    "href":"populating-objects-in-memory.html#GUID-DF723C06-62FE-4E5A-8BE0-0703695A7886"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.1.3 </span> Controls for In-Memory Population",
                                            "href":"populating-objects-in-memory.html#GUID-B50145A4-3A97-48DD-8AA3-7E239E926261",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">4.1.3.1 </span> The INMEMORY Subclause",
                                                    "href":"populating-objects-in-memory.html#GUID-5D4B2A1F-815F-4FDC-91F8-E5CF7179985B",
                                                    "topics":[
                                                        {
                                                            "title":"<span class=\"secnum\">4.1.3.1.1 </span> In-Memory Tables",
                                                            "href":"populating-objects-in-memory.html#GUID-2AA11DCC-5744-42C3-81FB-B2BF9A695DCA"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">4.1.3.1.2 </span> In-Memory External Tables",
                                                            "href":"populating-objects-in-memory.html#GUID-37E2E218-33A2-490E-891D-B627906DE16B"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">4.1.3.1.3 </span> In-Memory Materialized Views",
                                                            "href":"populating-objects-in-memory.html#GUID-64B4046F-C3E3-49EB-928E-6502AA58EF4A"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">4.1.3.1.4 </span> In-Memory Tablespaces",
                                                            "href":"populating-objects-in-memory.html#GUID-C06CE2D2-72A2-427F-ADAD-0AC689D02580"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">4.1.3.2 </span> Priority Options for In-Memory Population",
                                                    "href":"populating-objects-in-memory.html#GUID-B37DCA18-7CDA-425A-883B-036B70714F85"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">4.1.3.3 </span> IM Column Store Compression Methods",
                                                    "href":"populating-objects-in-memory.html#GUID-1965B8FE-B34E-42D9-9E97-45D6579162A4"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">4.1.3.4 </span> Oracle Compression Advisor",
                                                    "href":"populating-objects-in-memory.html#GUID-6E37613F-564B-4619-B9B3-CAEB09427E98"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">4.2 </span> Enabling and Disabling Tables for the IM Column Store",
                                    "href":"populating-objects-in-memory.html#GUID-C5D0A470-C06A-4EE2-AA1A-B221FFEB663B",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">4.2.1 </span> Enabling New Tables for the In-Memory Column Store",
                                            "href":"populating-objects-in-memory.html#GUID-FB360DEE-45DB-49FF-8510-541473AAD707"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.2.2 </span> Enabling and Disabling Existing Tables for the IM Column Store",
                                            "href":"populating-objects-in-memory.html#GUID-94F1D24C-ABEA-403D-B1D4-43B331321FFE"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.2.3 </span> Enabling and Disabling Tables for the IM Column Store: Examples",
                                            "href":"populating-objects-in-memory.html#GUID-F482BE39-36B9-4146-B335-8BEFBA3B3496"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.2.4 </span> Creating and Populating External Tables: Examples",
                                            "href":"populating-objects-in-memory.html#GUID-F1B26BDD-614B-4E4C-A986-8977B4B27DF0"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">4.3 </span> Enabling and Disabling Columns for In-Memory Tables",
                                    "href":"populating-objects-in-memory.html#GUID-452D19AE-EB5F-44AC-A1AD-70CF10D2D347",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">4.3.1 </span> About IM Virtual Columns",
                                            "href":"populating-objects-in-memory.html#GUID-C0BC34D3-2BD8-41A5-B2F0-9AB109C1B617"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.3.2 </span> Enabling IM Virtual Columns",
                                            "href":"populating-objects-in-memory.html#GUID-E75BEB47-6242-418B-9DE8-8AAC8910A2FA"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.3.3 </span> Enabling a Subset of Columns for the IM Column Store: Example",
                                            "href":"populating-objects-in-memory.html#GUID-128BA141-FB78-4828-B3EE-6FDAB6E23E2E"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.3.4 </span> Specifying INMEMORY Column Attributes on a NO INMEMORY Table: Example",
                                            "href":"populating-objects-in-memory.html#GUID-9E123407-13BA-4566-933D-6E4473C8FE5C"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">4.4 </span> Enabling and Disabling Tablespaces for the IM Column Store",
                                    "href":"populating-objects-in-memory.html#GUID-636A1675-838D-4004-9CDB-70783DC72C6B"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.5 </span> Enabling and Disabling Materialized Views for the IM Column Store",
                                    "href":"populating-objects-in-memory.html#GUID-8C3B4A9B-DC69-4207-A935-8DB4B3AC94FA"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.6 </span> Forcing Initial Population of an In-Memory Object: Tutorial",
                                    "href":"populating-objects-in-memory.html#GUID-F2D1098A-F26D-40B8-8B26-14018B0928FB"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">5 </span> Automating Management of In-Memory Objects",
                            "href":"configuring-memory-management.html#GUID-562D95E0-0B2E-4B0A-A75E-C44052FB3BE1",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">5.1 </span> Enabling ADO for the IM Column Store",
                                    "href":"configuring-memory-management.html#GUID-895C9AF1-7FD3-47D2-B8E7-079A39A88068",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">5.1.1 </span> About ADO Policies and the IM Column Store",
                                            "href":"configuring-memory-management.html#GUID-8228EE59-831D-44CB-AF22-3C2D8EBD6E27"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">5.1.2 </span> Purpose of ADO and the IM Column Store",
                                            "href":"configuring-memory-management.html#GUID-45E3D9C8-A40D-409C-A640-50F20817A1D3"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">5.1.3 </span> How ADO Works with Columnar Data",
                                            "href":"configuring-memory-management.html#GUID-39290247-D08E-426B-B0EC-6CEA369F7A7C",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">5.1.3.1 </span> How Heat Map Works",
                                                    "href":"configuring-memory-management.html#GUID-DE6B25DF-0041-434B-B755-D9A9739EA0D8"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">5.1.3.2 </span> How Policy Evaluation Works",
                                                    "href":"configuring-memory-management.html#GUID-31B56CFD-81D1-45F7-AC96-FE38BCAD2B0D"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">5.1.4 </span> Controls for ADO and the IM Column Store",
                                            "href":"configuring-memory-management.html#GUID-A484CA43-CFB3-4409-B0CD-0BE0ABCE87BE"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">5.1.5 </span> Creating an ADO Policy for the IM Column Store",
                                            "href":"configuring-memory-management.html#GUID-43F98ACA-675E-4458-9DD1-5BDA137A7E43"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">5.2 </span> Configuring Automatic In-Memory",
                                    "href":"configuring-memory-management.html#GUID-B2473D1F-AEAF-4802-9E28-85B3D823093C",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">5.2.1 </span> Purpose of Automatic In-Memory",
                                            "href":"configuring-memory-management.html#GUID-4FBE20C4-5524-45C1-8E71-C679B8B760F5"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">5.2.2 </span> How Automatic In-Memory Works",
                                            "href":"configuring-memory-management.html#GUID-D06C8FD9-7872-4B97-B22C-19CC07BB566A"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">5.2.3 </span> User Interface for Automatic In-Memory",
                                            "href":"configuring-memory-management.html#GUID-F5D88D68-8A80-4D80-B08F-C6F132797B47"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">5.2.4 </span> Controlling Automatic In-Memory",
                                            "href":"configuring-memory-management.html#GUID-16F41E6C-3E7F-420C-B7BB-1B0E6D864B59"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">5.2.5 </span> Setting the Time Interval for Automatic In-Memory",
                                            "href":"configuring-memory-management.html#GUID-5A2CAB56-8C24-414D-9444-74E4BB87255B"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part III Optimizing In-Memory Queries",
                    "href":"advanced-optimizations-for-in-memory-queries.html#GUID-33034151-7BD7-4186-B336-C693FBB27634",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">6 </span> Optimizing Queries with In-Memory Expressions",
                            "href":"optimizing-in-memory-expressions.html#GUID-5F82168D-A024-4F96-B3AF-7DA4C52908B8",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">6.1 </span> About IM Expressions",
                                    "href":"optimizing-in-memory-expressions.html#GUID-1B849DAF-277E-4B09-8275-367592115B06",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">6.1.1 </span> Purpose of IM Expressions",
                                            "href":"optimizing-in-memory-expressions.html#GUID-C241A1F0-2DC7-46F9-8CB8-F72ABE2C4081"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">6.1.2 </span> How IM Expressions Work",
                                            "href":"optimizing-in-memory-expressions.html#GUID-0F5B137B-A900-4946-ADDF-75AD3055802F",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">6.1.2.1 </span> IM Expressions Infrastructure",
                                                    "href":"optimizing-in-memory-expressions.html#GUID-FDA8B0D3-6339-4E19-8D2D-EEA0A7529B46"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">6.1.2.2 </span> Capture of IM Expressions",
                                                    "href":"optimizing-in-memory-expressions.html#GUID-B9E46C0C-F076-4651-A476-4B137A0E8A71",
                                                    "topics":[
                                                        {
                                                            "title":"<span class=\"secnum\">6.1.2.2.1 </span> Expression Capture Interval",
                                                            "href":"optimizing-in-memory-expressions.html#GUID-8A7D3942-774D-4143-A087-81DBCD2C176B"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">6.1.2.2.2 </span> Hidden SYS_IME Virtual Columns",
                                                            "href":"optimizing-in-memory-expressions.html#GUID-05B20684-447D-40A0-974D-665893F00695"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">6.1.2.3 </span> How the ESS Works",
                                                    "href":"optimizing-in-memory-expressions.html#GUID-3E1BF45A-7BB3-4B7E-A4FE-819FE22D232B"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">6.1.2.4 </span> How the Database Populates IM Expressions",
                                                    "href":"optimizing-in-memory-expressions.html#GUID-5ECB1746-6616-48D2-899C-55338628A871"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">6.1.2.5 </span> How IMEUs Relate to IMCUs",
                                                    "href":"optimizing-in-memory-expressions.html#GUID-576D47DF-3B3C-4162-B193-65DC01AC797B"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">6.1.3 </span> User Interfaces for IM Expressions",
                                            "href":"optimizing-in-memory-expressions.html#GUID-F823DF2B-2FD0-4E81-AB55-B06A52B098B7",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">6.1.3.1 </span> INMEMORY_EXPRESSIONS_USAGE",
                                                    "href":"optimizing-in-memory-expressions.html#GUID-F74CB689-DE3A-4A5B-AD34-816002DD6408"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">6.1.3.2 </span> DBMS_INMEMORY_ADMIN and DBMS_INMEMORY",
                                                    "href":"optimizing-in-memory-expressions.html#GUID-7D9F419F-A787-4BE7-A277-EF0EDCADE49C"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">6.1.4 </span> Basic Tasks for IM Expressions",
                                            "href":"optimizing-in-memory-expressions.html#GUID-5D07375B-1F63-49BD-80E0-28B5363607A2"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">6.2 </span> Configuring IM Expression Usage",
                                    "href":"optimizing-in-memory-expressions.html#GUID-B2342B74-D67D-4B16-9CC7-C31CA69903CC"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.3 </span> Capturing and Populating IM Expressions",
                                    "href":"optimizing-in-memory-expressions.html#GUID-DE164F9A-64E9-4A28-B906-A8CDEC0C1974"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.4 </span> Dropping IM Expressions",
                                    "href":"optimizing-in-memory-expressions.html#GUID-581C803B-56F2-4FD6-95DB-40B6B85DE857"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">7 </span> Optimizing Joins with Join Groups",
                            "href":"optimizing-queries-with-join-groups.html#GUID-3E5491C4-B345-4A8E-8B1B-8DC150C8A797",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">7.1 </span> About In-Memory Joins",
                                    "href":"optimizing-queries-with-join-groups.html#GUID-5FC74CA4-FD3E-4A17-A40D-9EE4EC61F355"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.2 </span> About Join Groups",
                                    "href":"optimizing-queries-with-join-groups.html#GUID-DC6B8DF7-C959-443F-B7D9-06ECA84BCD55"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.3 </span> Purpose of Join Groups",
                                    "href":"optimizing-queries-with-join-groups.html#GUID-5322DCBB-EC1A-435F-A552-C71A8879DE5B"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.4 </span> How Join Groups Work",
                                    "href":"optimizing-queries-with-join-groups.html#GUID-7972FD49-0418-4196-9069-A4F44D16A9F1",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">7.4.1 </span> How a Join Group Uses a Common Dictionary",
                                            "href":"optimizing-queries-with-join-groups.html#GUID-88A573DD-99D3-48D7-8310-B46F70184793"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">7.4.2 </span> How a Join Group Optimizes Scans",
                                            "href":"optimizing-queries-with-join-groups.html#GUID-94A4125F-E7DA-4462-8F8D-65AB8CB2BB63"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">7.5 </span> When a Hash Join Uses Common Dictionary Encodings",
                                    "href":"optimizing-queries-with-join-groups.html#GUID-B09C155D-FE48-408F-AD69-5EAD85372E64"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.6 </span> Creating Join Groups",
                                    "href":"optimizing-queries-with-join-groups.html#GUID-67D6F161-BEAD-495F-94C1-86D47B8A8E74"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.7 </span> Monitoring Join Group Usage",
                                    "href":"optimizing-queries-with-join-groups.html#GUID-5E6B9757-ADA2-408D-8FA4-274D36AE22E1",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">7.7.1 </span> Monitoring Join Groups Using a SQL Monitor Report: Example",
                                            "href":"optimizing-queries-with-join-groups.html#GUID-A1CEDB0F-5ADF-42B1-82F7-EB3D895E20DC"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">7.7.2 </span> Monitoring Join Groups from the Command Line: Example",
                                            "href":"optimizing-queries-with-join-groups.html#GUID-8F56486B-B706-4A5B-96CA-FD7C46D1CEB1"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">8 </span> Optimizing Aggregation",
                            "href":"optimizing-in-memory-aggregation.html#GUID-A9E6044E-DC81-44C7-8D0C-E77502722388",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">8.1 </span> Optimizing Joins with In-Memory Aggregation",
                                    "href":"optimizing-in-memory-aggregation.html#GUID-2C4FA6C6-3DA8-4CEA-9EF0-294396D15077",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">8.1.1 </span> About IM Aggregation",
                                            "href":"optimizing-in-memory-aggregation.html#GUID-C0C57677-E420-432C-9E1F-271011F0C775"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">8.1.2 </span> Purpose of IM Aggregation",
                                            "href":"optimizing-in-memory-aggregation.html#GUID-378D5929-2D9E-4211-B9E6-4EFA9CC42B7F",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">8.1.2.1 </span> When IM Aggregation Is Useful",
                                                    "href":"optimizing-in-memory-aggregation.html#GUID-0E4F30FE-674F-4284-90F7-520ED1DB427E"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">8.1.2.2 </span> When IM Aggregation Is Not Beneficial",
                                                    "href":"optimizing-in-memory-aggregation.html#GUID-278FB268-D892-4556-BF7F-9F3EAD93B6A9"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">8.1.3 </span> How IM Aggregation Works",
                                            "href":"optimizing-in-memory-aggregation.html#GUID-59C1A480-4977-4635-9C5F-FEDD195F44ED",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">8.1.3.1 </span> When the Optimizer Chooses IM Aggregation",
                                                    "href":"optimizing-in-memory-aggregation.html#GUID-C3786D7D-0FD6-44F7-93FD-468F3FA02056"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">8.1.3.2 </span> Key Vector",
                                                    "href":"optimizing-in-memory-aggregation.html#GUID-7A06072C-CC6A-4E47-B122-B9D74B3F2C68"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">8.1.3.3 </span> Two Phases of IM Aggregation",
                                                    "href":"optimizing-in-memory-aggregation.html#GUID-5FE79500-B8C5-4DD7-A2DD-BDA83340B5FF"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">8.1.3.4 </span> IM Aggregation: Scenario",
                                                    "href":"optimizing-in-memory-aggregation.html#GUID-C425C017-8505-4924-A7AE-308C9BAF2454",
                                                    "topics":[
                                                        {
                                                            "title":"<span class=\"secnum\">8.1.3.4.1 </span> Sample Analytic Query of a Star Schema",
                                                            "href":"optimizing-in-memory-aggregation.html#GUID-DDD8CDE8-85B4-4644-83FC-0E339CBEE8AE"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">8.1.3.4.2 </span> Step 1: Key Vector and Temporary Table Creation for geography Dimension",
                                                            "href":"optimizing-in-memory-aggregation.html#GUID-C739095A-8522-4748-8988-CE7E594E2B39"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">8.1.3.4.3 </span> Step 2: Key Vector and Temporary Table Creation for products Dimension",
                                                            "href":"optimizing-in-memory-aggregation.html#GUID-E22A075D-D027-4EEE-B670-B2D2DF50ED94"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">8.1.3.4.4 </span> Step 3: Key Vector Query Transformation",
                                                            "href":"optimizing-in-memory-aggregation.html#GUID-1FC11741-E3D2-458F-9442-96E9247954CC"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">8.1.3.4.5 </span> Step 4: Row Filtering from Fact Table",
                                                            "href":"optimizing-in-memory-aggregation.html#GUID-F41F2AD3-3AA9-4702-8E90-3EAB8E3453E5"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">8.1.3.4.6 </span> Step 5: Aggregation Using an Array",
                                                            "href":"optimizing-in-memory-aggregation.html#GUID-6A98F912-9D04-4570-99D9-A3D50E171186"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">8.1.3.4.7 </span> Step 6: Join Back to Temporary Tables",
                                                            "href":"optimizing-in-memory-aggregation.html#GUID-699A1CCA-8324-4049-AFD3-457ADBF1D81A"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">8.1.4 </span> Controls for IM Aggregation",
                                            "href":"optimizing-in-memory-aggregation.html#GUID-FA953802-7768-49D5-B70C-C057076F1F4A"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">8.1.5 </span> In-Memory Aggregation: Example",
                                            "href":"optimizing-in-memory-aggregation.html#GUID-5AB9792F-8030-4D13-BC12-8DB598A15459"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">8.2 </span> Optimizing In-Memory Arithmetic",
                                    "href":"optimizing-in-memory-aggregation.html#GUID-4321558D-853B-41A0-9098-4A45204F21BD",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">8.2.1 </span> About In-Memory Optimized Arithmetic",
                                            "href":"optimizing-in-memory-aggregation.html#GUID-1B4840FF-8917-4616-9768-82D39BB9D10F"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">8.2.2 </span> Enabling and Disabling In-Memory Optimized Arithmetic",
                                            "href":"optimizing-in-memory-aggregation.html#GUID-892AB0EB-2960-4D51-A2C1-9D9F291BAEFD"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">9 </span> Optimizing Repopulation of the IM Column Store",
                            "href":"repopulation-and-dml.html#GUID-85AB84D5-1308-430A-BED2-281F3E9515B2",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">9.1 </span> About Repopulation of the IM Column Store",
                                    "href":"repopulation-and-dml.html#GUID-857EFBD6-6D03-4543-9FAB-F66B5C16D0C7",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">9.1.1 </span> Row Modifications and the Transaction Journal",
                                            "href":"repopulation-and-dml.html#GUID-35945277-B84B-45FB-A0A2-EFC0513702D2"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.1.2 </span> Automatic Repopulation",
                                            "href":"repopulation-and-dml.html#GUID-7FD4FA4E-E752-4B62-8FC2-55A9CC31704A"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.1.3 </span> Manual Repopulation of External Tables",
                                            "href":"repopulation-and-dml.html#GUID-8ECC0C1A-A42A-4FA5-9790-C0F54BFB6D25"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">9.2 </span> How Data Loading Works with the IM Column Store",
                                    "href":"repopulation-and-dml.html#GUID-ED2DDBF3-2279-4472-84F4-195C939435AC",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">9.2.1 </span> How Conventional DML Works with the IM Column Store",
                                            "href":"repopulation-and-dml.html#GUID-A556E5A1-020A-4511-8DE7-8D5119CFB452",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">9.2.1.1 </span> Staleness Threshold",
                                                    "href":"repopulation-and-dml.html#GUID-BB1D4D35-35AF-4C19-BDC0-B4AC37D2C32F"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">9.2.1.2 </span> Double Buffering",
                                                    "href":"repopulation-and-dml.html#GUID-B3C7EF3A-4AD0-48D2-9E72-F4EAB8129DF1"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.2.2 </span> How Direct Path Loads Work with the IM Column Store",
                                            "href":"repopulation-and-dml.html#GUID-A8AB9768-5695-44C7-8482-6BE18A415318"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.2.3 </span> How a Partition Exchange Load Works with the IM Column Store",
                                            "href":"repopulation-and-dml.html#GUID-B8D2EA63-7FC2-489A-BCD3-6A9D70480EEC"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">9.3 </span> When the Database Repopulates the IM Column Store",
                                    "href":"repopulation-and-dml.html#GUID-333C0C67-1422-4391-BBCB-2A10DF8AC612",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">9.3.1 </span> Threshold-Based and Trickle Repopulation",
                                            "href":"repopulation-and-dml.html#GUID-F0D932EF-0D37-4DF9-99C5-ABBE7E354709"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.3.2 </span> Factors Affecting Repopulation",
                                            "href":"repopulation-and-dml.html#GUID-3B9E3B8B-2AE9-469A-9DB9-367615A6FABC"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">9.4 </span> Controls for Repopulation of the IM Column Store",
                                    "href":"repopulation-and-dml.html#GUID-3ACF448A-C685-432B-84E9-DB8719CF3359"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.5 </span> Optimizing Trickle Repopulation: Tutorial",
                                    "href":"repopulation-and-dml.html#GUID-0E33E887-A6D5-4D56-BFC5-43D3EDFE60D4"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part IV High Availability and the IM Column Store",
                    "href":"high-availability-and-the-im-column-store.html#GUID-744E10A1-D345-4F73-82BD-6690CFF333D4",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">10 </span> Managing IM FastStart for the IM Column Store",
                            "href":"managing-im-faststart-for-im-column-store.html#GUID-CAA790EA-0CF6-44A8-A332-3CE23EC0FE79",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">10.1 </span> About IM FastStart",
                                    "href":"managing-im-faststart-for-im-column-store.html#GUID-54FAC938-78C2-487F-8E6E-016073C5B735",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">10.1.1 </span> Purpose of IM FastStart",
                                            "href":"managing-im-faststart-for-im-column-store.html#GUID-9320CD93-B260-4C4C-BD15-5B120454B577"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">10.1.2 </span> How IM FastStart Works",
                                            "href":"managing-im-faststart-for-im-column-store.html#GUID-0D6BE0E3-4E99-466E-AD1A-18404241C670",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">10.1.2.1 </span> How the Database Manages the FastStart Area",
                                                    "href":"managing-im-faststart-for-im-column-store.html#GUID-8B47B9F8-97D4-4D75-8238-333661F3CA96"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">10.1.2.2 </span> How the Database Reads from the FastStart Area",
                                                    "href":"managing-im-faststart-for-im-column-store.html#GUID-5ADACAB3-1D86-4894-A723-C32724A5A1A8"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">10.2 </span> Enabling IM FastStart for the IM Column Store",
                                    "href":"managing-im-faststart-for-im-column-store.html#GUID-682D850C-1387-48A9-A4EA-A332522E5F60"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.3 </span> Retrieving the Name of the Current IM FastStart Tablespace",
                                    "href":"managing-im-faststart-for-im-column-store.html#GUID-949A3B49-C8B9-4188-A565-77369F3C1C1B"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.4 </span> Migrating the FastStart Area to a Different Tablespace",
                                    "href":"managing-im-faststart-for-im-column-store.html#GUID-33F5A0CD-4459-446B-AA1B-C955BAFD2927"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.5 </span> Disabling IM FastStart for the IM Column Store",
                                    "href":"managing-im-faststart-for-im-column-store.html#GUID-566D88CD-D068-4794-88DA-5AFA373260C7"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">11 </span> Deploying IM Column Stores in Oracle RAC",
                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-E897E3E9-1163-4FAE-9C74-B8B83B515E31",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">11.1 </span> Overview of Database In-Memory and Oracle RAC",
                                    "href":"deploying-in-memory-in-oracle-rac.html#GUID-63748559-8BC8-473C-BE6E-453DD38ED9A3",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">11.1.1 </span> Multiple IM Column Stores",
                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-8B5CA79B-AADD-482A-A04C-E7A954BD04BF"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">11.1.2 </span> Distribution and Duplication of Columnar Data in Oracle RAC",
                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-EC299917-17C4-4486-9371-A2DA7E1D5D02",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">11.1.2.1 </span> Distribution of Columnar Data in Oracle RAC",
                                                    "href":"deploying-in-memory-in-oracle-rac.html#GUID-45BCCDEF-426A-4152-A0BB-218032B128B2",
                                                    "topics":[
                                                        {
                                                            "title":"<span class=\"secnum\">11.1.2.1.1 </span> Distribution by Partition",
                                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-53C9BA44-AD00-4BAC-8219-1A34D9DB8ED7"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">11.1.2.1.2 </span> Distribution by Subpartition",
                                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-32148BE2-9F5B-4989-8618-EC7FDFDA9213"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">11.1.2.1.3 </span> Distribution by Rowid Range",
                                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-97960A3E-FB5D-4DD5-B77F-ED9FA6958099"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">11.1.2.2 </span> Duplication of Columnar Data in Oracle RAC",
                                                    "href":"deploying-in-memory-in-oracle-rac.html#GUID-AF767E49-B4FB-4CCB-A7BF-C62E871E59AA",
                                                    "topics":[
                                                        {
                                                            "title":"<span class=\"secnum\">11.1.2.2.1 </span> DUPLICATE Clause in Oracle RAC",
                                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-B1A3E0D2-DE96-4DF5-B796-67FAB74B01AB"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">11.1.2.2.2 </span> DUPLICATE ALL Clause in Oracle RAC",
                                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-C979C5D2-944D-4422-8C92-430F92914975"
                                                        },
                                                        {
                                                            "title":"<span class=\"secnum\">11.1.2.2.3 </span> NO DUPLICATE Clause in Oracle RAC",
                                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-CDB1862E-CCDE-44D3-833E-66CCAC45E1CA"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">11.1.3 </span> Parallelism in Oracle RAC",
                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-86F5001A-9DFA-410B-9A01-BD7ACF1D8D07",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">11.1.3.1 </span> Serial and Parallel Queries in Oracle RAC",
                                                    "href":"deploying-in-memory-in-oracle-rac.html#GUID-AAF65A8A-56E8-409C-94F9-1FB3B72B3260"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">11.1.3.2 </span> Auto DOP in Oracle RAC",
                                                    "href":"deploying-in-memory-in-oracle-rac.html#GUID-38008B94-65EA-4255-873A-B08839E88B59"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">11.1.4 </span> FastStart Area in Oracle RAC",
                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-5FCDE9BB-4285-4270-B1AE-FF9D3FF2400B"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">11.2 </span> Configuring In-Memory Services in Oracle RAC",
                                    "href":"deploying-in-memory-in-oracle-rac.html#GUID-C6DE0126-DCD7-4E6C-B673-F8FE1AECD23C",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">11.2.1 </span> Instance-Level Service Controls",
                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-45D38B7B-91EB-4FE1-AC4B-0B9F7B50CFF8"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">11.2.2 </span> Object-Level Service Controls",
                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-2CF933E4-102B-4C9B-9953-6953A8CE2BCE"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">11.2.3 </span> Benefits of Services for Database In-Memory in Oracle RAC",
                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-3C829D4E-3082-4E46-A9CD-FC5A55419EA5"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">11.2.4 </span> Configuring an In-Memory Service for a Subset of Nodes: Example",
                                            "href":"deploying-in-memory-in-oracle-rac.html#GUID-631D6390-BAC3-4C6E-93E4-09D4F23525D2"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">12 </span> Deploying an IM Column Store with Oracle Active Data Guard",
                            "href":"deploying-im-column-store-with-adg.html#GUID-D7307BB7-2C8D-4A2C-98F6-B3F6000EFC20",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">12.1 </span> About Database In-Memory and Active Data Guard",
                                    "href":"deploying-im-column-store-with-adg.html#GUID-636738E4-FA7A-4FCB-BB55-BBAFFAC7C698",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">12.1.1 </span> Purpose of IM Column Stores in Oracle Active Data Guard",
                                            "href":"deploying-im-column-store-with-adg.html#GUID-F5934C5A-34DE-46BA-ABD2-727E548B8D9F",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">12.1.1.1 </span> Identical IM Column Stores in Primary and Standby Databases",
                                                    "href":"deploying-im-column-store-with-adg.html#GUID-BCF259A8-C887-4F35-83D4-B3FFAE3A37BC"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">12.1.1.2 </span> IM Column Store in Standby Database Only",
                                                    "href":"deploying-im-column-store-with-adg.html#GUID-BB71407C-A16D-46BD-83CD-CEE5B8B7C944"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">12.1.1.3 </span> Different Objects in the Primary and Standby IM Column Stores",
                                                    "href":"deploying-im-column-store-with-adg.html#GUID-F76F3503-2012-49C1-9FAC-15B3FBC09BDA"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">12.1.2 </span> How IM Column Stores Work in Oracle Active Data Guard",
                                            "href":"deploying-im-column-store-with-adg.html#GUID-1FA09909-AF74-4DA1-A2C0-EA5E97430BFC"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">12.2 </span> Configuring IM Column Stores in an Oracle Active Data Guard Environment",
                                    "href":"deploying-im-column-store-with-adg.html#GUID-1B891BD1-66E8-40CD-BCE0-C3532FC36222"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part V Database In-Memory Reference",
                    "href":"in-memory-reference.html#GUID-1450AD7F-D5B6-41D6-AA3A-1E096697D963",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">13 </span> In-Memory Initialization Parameters",
                            "href":"init-parameters-for-im-column-store.html#GUID-A67ABCAC-C6B9-499E-8AE0-BD7922B239BE"
                        },
                        {
                            "title":"<span class=\"secnum\">14 </span> In-Memory Views",
                            "href":"views-related-to-im-column-store.html#GUID-2EBF8D9B-FA9E-4D67-8934-5908E6018D4E"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">A </span> Using IM Column Store in Cloud Control",
                    "href":"using-im-column-store-in-enterprise-manager.html#GUID-A9E4D99B-9DBD-42F8-BC32-BECB0173B09C",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">A.1 </span> Meeting Prerequisites for Using IM Column Store in Cloud Control",
                            "href":"using-im-column-store-in-enterprise-manager.html#GUID-7D673892-E274-40D8-9294-04ADFB1B2B95"
                        },
                        {
                            "title":"<span class=\"secnum\">A.2 </span> Using the In-Memory Column Store Central Home Page to Monitor In-Memory Support for Database Objects",
                            "href":"using-im-column-store-in-enterprise-manager.html#GUID-0B27FF65-B721-416A-A1AD-16D1DFFFE0F5"
                        },
                        {
                            "title":"<span class=\"secnum\">A.3 </span> Specifying In-Memory Details When Creating a Table or Partition",
                            "href":"using-im-column-store-in-enterprise-manager.html#GUID-CA0F4730-C008-4C49-84ED-BF9CAC69DD4B"
                        },
                        {
                            "title":"<span class=\"secnum\">A.4 </span> Viewing or Editing IM Column Store Details of a Table",
                            "href":"using-im-column-store-in-enterprise-manager.html#GUID-D7E6794B-3B7C-42CB-94EF-FB9981FA4909"
                        },
                        {
                            "title":"<span class=\"secnum\">A.5 </span> Viewing or Editing IM Column Store Details of a Partition",
                            "href":"using-im-column-store-in-enterprise-manager.html#GUID-B61D1CAD-2BF2-4CF7-8B49-52E000225DC4"
                        },
                        {
                            "title":"<span class=\"secnum\">A.6 </span> Specifying IM Column Store Details During Tablespace Creation",
                            "href":"using-im-column-store-in-enterprise-manager.html#GUID-708F6FEE-5E5C-4225-9A69-484D2EA0FBD1"
                        },
                        {
                            "title":"<span class=\"secnum\">A.7 </span> Viewing and Editing IM Column Store Details of a Tablespace",
                            "href":"using-im-column-store-in-enterprise-manager.html#GUID-96918886-3DDD-48E0-BCDD-3AE8959D5814"
                        },
                        {
                            "title":"<span class=\"secnum\">A.8 </span> Specifying IM Column Store Details During Materialized View Creation",
                            "href":"using-im-column-store-in-enterprise-manager.html#GUID-850F3D6F-67E6-43D5-AE98-F5BF19142B69"
                        },
                        {
                            "title":"<span class=\"secnum\">A.9 </span> Viewing or Editing IM Column Store Details of a Materialized View",
                            "href":"using-im-column-store-in-enterprise-manager.html#GUID-3CF0518A-EABA-4DAA-91D0-A0BE7E17D306"
                        }
                    ]
                },
                {
                    "title":"Glossary",
                    "href":"glossary.html"
                },
                {
                    "title":"Index",
                    "href":"book-index.html"
                }
            ]
        }
    ]
});