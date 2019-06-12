define(
{
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
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
                    "title":"Preface",
                    "href":"preface.html#GUID-774B838F-69B2-4361-8C0C-2DA08A87079E",
                    "topics":[
                        {
                            "title":"Audience",
                            "href":"preface.html#GUID-A06366B0-CF2A-4983-BBCE-65007CB811E6"
                        },
                        {
                            "title":"Documentation Accessibility",
                            "href":"preface.html#GUID-E409CC44-9A8F-4043-82C8-6B95CD939296"
                        },
                        {
                            "title":"Related Documents",
                            "href":"preface.html#GUID-4E35B950-FE9B-4F1A-8F3F-E6A501A17D04"
                        },
                        {
                            "title":"Conventions",
                            "href":"preface.html#GUID-6E39933C-0FE0-44E2-8BBD-ED6A9FDF9DC5"
                        }
                    ]
                },
                {
                    "title":"Changes in This Release for Oracle Database Workspace Manager Developer's Guide",
                    "href":"workspace-manager-whats-new.html#GUID-8F549796-55C1-4C8C-89B0-3DD052E23735",
                    "topics":[
                        {
                            "title":"Changes in Oracle Database Release 18.1",
                            "href":"workspace-manager-whats-new.html#GUID-78D8D76B-3754-45C0-8B6E-5C204EDD5637",
                            "topics":[
                                {
                                    "title":"New DBMS_WM Procedure: CopyWorkspace",
                                    "href":"workspace-manager-whats-new.html#GUID-BB1734E0-E913-414C-944A-54614353523A"
                                },
                                {
                                    "title":"New Static Data Dictionary View: ALL_WM_CONSTRAINT_VIOLATIONS",
                                    "href":"workspace-manager-whats-new.html#GUID-EF6FCF53-CE93-452E-AB7F-7694B4DDA9AE"
                                }
                            ]
                        },
                        {
                            "title":"Changes in Oracle Database 12c Release 2 (12.2)",
                            "href":"workspace-manager-whats-new.html#GUID-9653980E-EEE9-4A84-827F-F21CA341403E",
                            "topics":[
                                {
                                    "title":"New Features (12.2)",
                                    "href":"workspace-manager-whats-new.html#GUID-3D729446-EFF2-4C3F-9D19-CE4989D458BB",
                                    "topics":[
                                        {
                                            "title":"New DBMS_WM Subprograms (12.2)",
                                            "href":"workspace-manager-whats-new.html#GUID-4566DC2D-72BD-41C2-B4FC-44C60C5AA023"
                                        },
                                        {
                                            "title":"Changes to Existing DBMS_WM Subprograms (12.2)",
                                            "href":"workspace-manager-whats-new.html#GUID-CA22EBDB-64CD-4485-BAEE-5A33F1D3D6A6"
                                        },
                                        {
                                            "title":"Other Enhancements (12.2)",
                                            "href":"workspace-manager-whats-new.html#GUID-75031384-AA58-4F98-A45C-11E0909E06C5"
                                        },
                                        {
                                            "title":"Workspace Manager Static Data Dictionary Views (12.2)",
                                            "href":"workspace-manager-whats-new.html#GUID-ECDB0E69-D147-45A2-9C37-95BCE6C8E442"
                                        },
                                        {
                                            "title":"System Parameter-Related Changes (12.2)",
                                            "href":"workspace-manager-whats-new.html#GUID-0063D943-E184-4805-86A6-A17271A4DA65"
                                        },
                                        {
                                            "title":"Privilege-Related Changes (12.2)",
                                            "href":"workspace-manager-whats-new.html#GUID-C508D022-6833-477E-BD05-8F157014B654"
                                        }
                                    ]
                                },
                                {
                                    "title":"Desupported: Advanced Replication Support in Workspace Manager (12.2)",
                                    "href":"workspace-manager-whats-new.html#GUID-5ED2B0B6-4443-48DE-845E-832C34C92E65"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part I Conceptual and Usage Information",
                    "href":"workspace-manager-concepts-usage.html#GUID-4364945A-B6E1-47FF-9360-273FF92D7F76",
                    "topics":[
                        {
                            "title":"1 Introduction to Workspace Manager",
                            "href":"introduction-to-workspace-manager.html#GUID-CF637BD7-E00C-4495-8D83-B9C805E3BBE1",
                            "topics":[
                                {
                                    "title":"1.1 Workspace Manager Overview",
                                    "href":"introduction-to-workspace-manager.html#GUID-6B0A8E39-D83D-483B-A77D-0AE64F46ACDF",
                                    "topics":[
                                        {
                                            "title":"1.1.1 Workspace Hierarchy",
                                            "href":"introduction-to-workspace-manager.html#GUID-4A8A1FF3-9714-4318-831B-6EE6D0619F59"
                                        },
                                        {
                                            "title":"1.1.2 Using Savepoints",
                                            "href":"introduction-to-workspace-manager.html#GUID-9F85C3B4-55C8-4C15-87B1-381B0AB04206",
                                            "topics":[
                                                {
                                                    "title":"1.1.2.1 Design Issue: Savepoint or Child Workspace?",
                                                    "href":"introduction-to-workspace-manager.html#GUID-9F4E59DC-03B2-4A1B-9CC7-B5FC4EBB3B68"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"1.1.3 Merging and Rolling Back Workspace Changes",
                                            "href":"introduction-to-workspace-manager.html#GUID-0FB9526A-7BF5-4FAD-BD57-70785B2740D8"
                                        },
                                        {
                                            "title":"1.1.4 Resolving Conflicts Before a Merge or Refresh Operation",
                                            "href":"introduction-to-workspace-manager.html#GUID-D85E87F3-00E5-4B8F-AD01-87784CEBA64A"
                                        },
                                        {
                                            "title":"1.1.5 Freezing and Unfreezing Workspaces",
                                            "href":"introduction-to-workspace-manager.html#GUID-10E59D30-48BC-412F-9F68-049C5642E899"
                                        },
                                        {
                                            "title":"1.1.6 Removing Workspaces",
                                            "href":"introduction-to-workspace-manager.html#GUID-40AFF7AB-2E13-4650-A796-81D2EE00B1C3"
                                        },
                                        {
                                            "title":"1.1.7 Using Workspace Manager Events",
                                            "href":"introduction-to-workspace-manager.html#GUID-3DC3D236-1D5A-4333-8A3C-F58D9B0D1A35"
                                        },
                                        {
                                            "title":"1.1.8 Autocommitting of Workspace Manager Operations",
                                            "href":"introduction-to-workspace-manager.html#GUID-0761ACF2-7ADB-4FCA-81C2-C92AED12C6D6"
                                        },
                                        {
                                            "title":"1.1.9 Continually Refreshed Workspaces",
                                            "href":"introduction-to-workspace-manager.html#GUID-7BE22B0E-CB82-41FD-B29D-F0C0BAAB008F"
                                        },
                                        {
                                            "title":"1.1.10 Multiparent Workspaces",
                                            "href":"introduction-to-workspace-manager.html#GUID-A5CDCE30-B8F5-4107-9670-52B5736A4D21"
                                        },
                                        {
                                            "title":"1.1.11 Infrastructure for Version-Enabling of Tables",
                                            "href":"introduction-to-workspace-manager.html#GUID-77CD9556-CC46-4A83-B7D7-AC80B4048371"
                                        },
                                        {
                                            "title":"1.1.12 Creation of Row Versions and Historical Copies",
                                            "href":"introduction-to-workspace-manager.html#GUID-B1E733FD-4D5C-4826-984A-E7CF714E9F71"
                                        },
                                        {
                                            "title":"1.1.13 Workspace Manager Schema, Metadata, and Package",
                                            "href":"introduction-to-workspace-manager.html#GUID-664D5FA6-0C6A-49B3-A394-92271796D401"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.2 Session Context Information for Workspace Manager",
                                    "href":"introduction-to-workspace-manager.html#GUID-0344995B-B3DA-43D3-8CD7-542636864E18"
                                },
                                {
                                    "title":"1.3 Lock Management with Workspace Manager",
                                    "href":"introduction-to-workspace-manager.html#GUID-7FC3B886-7433-4D77-8CE0-44C2AD0DB3FD",
                                    "topics":[
                                        {
                                            "title":"1.3.1 Exclusive Locking and Row Versions",
                                            "href":"introduction-to-workspace-manager.html#GUID-41A6079F-A307-4DC3-82C7-92835DFA0A19"
                                        },
                                        {
                                            "title":"1.3.2 Locks Taken for Workspace Manager Operations",
                                            "href":"introduction-to-workspace-manager.html#GUID-135927BB-2971-4595-82E6-998C73B2A11B"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.4 Privilege Management with Workspace Manager",
                                    "href":"introduction-to-workspace-manager.html#GUID-2E34C844-BF5F-413B-B534-EA058E593E38"
                                },
                                {
                                    "title":"1.5 System Parameters for Workspace Manager",
                                    "href":"introduction-to-workspace-manager.html#GUID-0163BDA5-44CE-4590-9D37-E55CA6770E64"
                                },
                                {
                                    "title":"1.6 Import and Export Considerations",
                                    "href":"introduction-to-workspace-manager.html#GUID-DED7327C-E526-4984-AA6D-D47B106630DB"
                                },
                                {
                                    "title":"1.7 Bulk Loading into Version-Enabled Tables",
                                    "href":"introduction-to-workspace-manager.html#GUID-051577FB-E3F4-435A-8BAB-9E493C1B928C"
                                },
                                {
                                    "title":"1.8 DDL Operations Related to Version-Enabled Tables",
                                    "href":"introduction-to-workspace-manager.html#GUID-AC486B05-4E35-4F9E-B543-E173A0719F94"
                                },
                                {
                                    "title":"1.9 Constraint Support with Workspace Manager",
                                    "href":"introduction-to-workspace-manager.html#GUID-3C515BD8-F271-45FA-AC18-613F7C7A15C1",
                                    "topics":[
                                        {
                                            "title":"1.9.1 Referential Integrity Support",
                                            "href":"introduction-to-workspace-manager.html#GUID-378EB644-747D-4E9C-BDD3-318EA3ABDF74",
                                            "topics":[
                                                {
                                                    "title":"1.9.1.1 Locking with DML Operations on Tables with Referential Integrity Constraints",
                                                    "href":"introduction-to-workspace-manager.html#GUID-7CBD7D01-8EAA-4DF3-9F0B-76DAB5A613A3"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"1.9.2 Unique Constraints",
                                            "href":"introduction-to-workspace-manager.html#GUID-827BA93C-B7F8-48CD-9420-9101D9089B14"
                                        },
                                        {
                                            "title":"1.9.3 SET NULL Constraints",
                                            "href":"introduction-to-workspace-manager.html#GUID-D6ABAA12-4BFA-4B5B-8A3F-63D11C0B0E62"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.10 Triggers on Version-Enabled Tables",
                                    "href":"introduction-to-workspace-manager.html#GUID-4953D378-A38E-4329-B6CD-99F2463329FB"
                                },
                                {
                                    "title":"1.11 Virtual Private Database Considerations",
                                    "href":"introduction-to-workspace-manager.html#GUID-376E0183-72AA-4006-A1F7-461BD819D374"
                                },
                                {
                                    "title":"1.12 Support for Table Synonyms",
                                    "href":"introduction-to-workspace-manager.html#GUID-C1463E82-6299-48B6-8965-C67341BCE079"
                                },
                                {
                                    "title":"1.13 Materialized View Support",
                                    "href":"introduction-to-workspace-manager.html#GUID-FF9EE8F1-E5CD-4710-AAE8-8D30096DDB0A"
                                },
                                {
                                    "title":"1.14 Spatial and Graph Topology Support",
                                    "href":"introduction-to-workspace-manager.html#GUID-91B1ED22-D9F9-4AD5-ADC7-F2FD52A1ADE2",
                                    "topics":[
                                        {
                                            "title":"1.14.1 Locking Considerations with Topologies",
                                            "href":"introduction-to-workspace-manager.html#GUID-66F17DD0-ED6F-4589-931A-4695DBA15B29"
                                        },
                                        {
                                            "title":"1.14.2 Additional Considerations with Topologies",
                                            "href":"introduction-to-workspace-manager.html#GUID-3CC3BB42-8854-43DD-AF79-71679733A71F"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.15 Workspace Manager Reserved Words and Characters",
                                    "href":"introduction-to-workspace-manager.html#GUID-ACAC2D46-ED6F-464A-BE2B-29C6DCB0481D"
                                },
                                {
                                    "title":"1.16 DBMS_WM Subprogram Categories",
                                    "href":"introduction-to-workspace-manager.html#GUID-10AB8A2B-6EB5-4E60-AADF-69A634139BD3",
                                    "topics":[
                                        {
                                            "title":"1.16.1 Table Management Subprograms",
                                            "href":"introduction-to-workspace-manager.html#GUID-A512ACB5-9926-4C7E-BEF6-0A6B8115C18E"
                                        },
                                        {
                                            "title":"1.16.2 Workspace Management Subprograms",
                                            "href":"introduction-to-workspace-manager.html#GUID-14515801-0606-4F37-9A82-1E3581406F6D"
                                        },
                                        {
                                            "title":"1.16.3 Savepoint Management Subprograms",
                                            "href":"introduction-to-workspace-manager.html#GUID-19968894-9A4A-4B7A-956D-BDE5C396039F"
                                        },
                                        {
                                            "title":"1.16.4 Privilege Management Subprograms",
                                            "href":"introduction-to-workspace-manager.html#GUID-ABC3520B-D245-44F1-B3DF-8441C3F295E5"
                                        },
                                        {
                                            "title":"1.16.5 Lock Management Subprograms",
                                            "href":"introduction-to-workspace-manager.html#GUID-DF3F6A1B-7221-4022-BEB7-5CD54E332766"
                                        },
                                        {
                                            "title":"1.16.6 Conflict Management Subprograms",
                                            "href":"introduction-to-workspace-manager.html#GUID-BE8D960B-B022-4D52-B8E1-1D6D311D8F40"
                                        },
                                        {
                                            "title":"1.16.7 Bulk Load Support Subprograms",
                                            "href":"introduction-to-workspace-manager.html#GUID-55E93F91-0467-4CB7-8AA2-AFD9BDC8BA5B"
                                        }
                                    ]
                                },
                                {
                                    "title":"1.17 Simplified Examples Using Workspace Manager",
                                    "href":"introduction-to-workspace-manager.html#GUID-2EC7898E-0B22-402D-9865-3B21104F7B8A",
                                    "topics":[
                                        {
                                            "title":"1.17.1 Example: Marketing Budget Options",
                                            "href":"introduction-to-workspace-manager.html#GUID-92E467A9-BFE9-48AD-AC83-9AD8B2A59AC1"
                                        },
                                        {
                                            "title":"1.17.2 Example: Warehouse Expansion Options",
                                            "href":"introduction-to-workspace-manager.html#GUID-5B98545B-666D-4371-834A-87D683D2FFAB"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"2 Workspace Manager Events",
                            "href":"workspace-manager-events.html#GUID-C37F89FE-48D9-478D-A227-DBC043FF569D",
                            "topics":[
                                {
                                    "title":"2.1 List of Workspace Manager Events",
                                    "href":"workspace-manager-events.html#GUID-75395F72-985A-472F-AFB2-D9A18D854DAA"
                                },
                                {
                                    "title":"2.2 Event Parameters",
                                    "href":"workspace-manager-events.html#GUID-1E5983A9-ECAD-4BC6-8B3C-2B158A2F06C4"
                                },
                                {
                                    "title":"2.3 ALLOW_CAPTURE_EVENTS System Parameter",
                                    "href":"workspace-manager-events.html#GUID-E5CD75CB-7402-450F-BB3B-32F18E6394F8"
                                },
                                {
                                    "title":"2.4 AQ Operations and Workspace Manager Events",
                                    "href":"workspace-manager-events.html#GUID-FF092E6F-784F-4D5E-AA64-E9A0CDDBC8BA",
                                    "topics":[
                                        {
                                            "title":"2.4.1 Workspace Manager Event Queue Administration",
                                            "href":"workspace-manager-events.html#GUID-D5B33938-643E-4F53-9B06-06559BB03244"
                                        },
                                        {
                                            "title":"2.4.2 Privileges and Access Control for Queues",
                                            "href":"workspace-manager-events.html#GUID-8F9EF92F-F4F7-45CE-838F-5873685018AE"
                                        },
                                        {
                                            "title":"2.4.3 Rule-Based Subscription",
                                            "href":"workspace-manager-events.html#GUID-264003A4-9C2C-4529-81B0-A78C1E1073CC"
                                        },
                                        {
                                            "title":"2.4.4 Listening for Events",
                                            "href":"workspace-manager-events.html#GUID-19EB7A56-8914-4265-AFAD-448CF9F78AC8"
                                        },
                                        {
                                            "title":"2.4.5 Asynchronous Notification",
                                            "href":"workspace-manager-events.html#GUID-C598F17B-DBC2-4F6F-8951-0D96BF226453"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"3 Workspace Manager Valid Time Support",
                            "href":"valid-time-support.html#GUID-967E7CE5-A328-4BA7-AA7B-7899B6C99C01",
                            "topics":[
                                {
                                    "title":"3.1 Valid Time Support: Introduction and Example",
                                    "href":"valid-time-support.html#GUID-08EB30A1-F164-400E-AAF4-024768048E90"
                                },
                                {
                                    "title":"3.2 WM_PERIOD Data Type",
                                    "href":"valid-time-support.html#GUID-4D80E810-2C1C-434F-994A-6AC6B2895825"
                                },
                                {
                                    "title":"3.3 Valid Time Constants",
                                    "href":"valid-time-support.html#GUID-1866ED4D-E080-4575-9B34-4A4B60FBF37B"
                                },
                                {
                                    "title":"3.4 API Features for Valid Time Support",
                                    "href":"valid-time-support.html#GUID-04312857-D935-48AB-B91B-95FCAA07814E"
                                },
                                {
                                    "title":"3.5 Operators for Valid Time Support",
                                    "href":"valid-time-support.html#GUID-8FDD27F9-D900-443A-8E69-FB0BE141FFE1",
                                    "topics":[
                                        {
                                            "title":"3.5.1 WM_CONTAINS",
                                            "href":"valid-time-support.html#GUID-FC68F0CA-2FE4-4053-9E0D-7B6C76A4E8E3"
                                        },
                                        {
                                            "title":"3.5.2 WM_EQUALS",
                                            "href":"valid-time-support.html#GUID-B02289A5-5BF5-4B40-AEC4-69EBB1948B22"
                                        },
                                        {
                                            "title":"3.5.3 WM_GREATERTHAN",
                                            "href":"valid-time-support.html#GUID-F7E24EEE-4EE2-411A-9EDB-0EB8846350C2"
                                        },
                                        {
                                            "title":"3.5.4 WM_INTERSECTION",
                                            "href":"valid-time-support.html#GUID-96142D0E-7884-49A3-9E7A-3C7678B15CE9"
                                        },
                                        {
                                            "title":"3.5.5 WM_LDIFF",
                                            "href":"valid-time-support.html#GUID-A1C7622F-76BC-44EC-94C8-DC4EE2A096EF"
                                        },
                                        {
                                            "title":"3.5.6 WM_LESSTHAN",
                                            "href":"valid-time-support.html#GUID-F6FAA51B-2963-4BD7-8094-0223F23D8B58"
                                        },
                                        {
                                            "title":"3.5.7 WM_MEETS",
                                            "href":"valid-time-support.html#GUID-A0289649-B322-4B79-BEB3-3B51DB40B6EB"
                                        },
                                        {
                                            "title":"3.5.8 WM_OVERLAPS",
                                            "href":"valid-time-support.html#GUID-ADFA6724-E29F-4F79-8C19-0DC8D357EEA1"
                                        },
                                        {
                                            "title":"3.5.9 WM_RDIFF",
                                            "href":"valid-time-support.html#GUID-4F591088-5343-471C-9670-A7EDDFBC02CF"
                                        }
                                    ]
                                },
                                {
                                    "title":"3.6 Queries and DML Operations with Valid Time Support",
                                    "href":"valid-time-support.html#GUID-2778AB34-FDCD-44CC-9B6A-75D53EC81A7B",
                                    "topics":[
                                        {
                                            "title":"3.6.1 Queries",
                                            "href":"valid-time-support.html#GUID-07C8EBE7-6130-47EB-87EA-12BA03ADDC00"
                                        },
                                        {
                                            "title":"3.6.2 Data Manipulation (DML) Operations",
                                            "href":"valid-time-support.html#GUID-19C248F1-A3DD-4CBA-985E-9AB4FF1313B0",
                                            "topics":[
                                                {
                                                    "title":"3.6.2.1 Update Operations",
                                                    "href":"valid-time-support.html#GUID-95DAA1AE-90DB-46A0-BDA2-66D5A5C2DA05"
                                                },
                                                {
                                                    "title":"3.6.2.2 Insert Operations",
                                                    "href":"valid-time-support.html#GUID-6EA33492-7674-4F88-8561-26BA11906CB2"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "title":"3.7 Constraint Management for Valid Time Support",
                                    "href":"valid-time-support.html#GUID-F4650E9B-AEB4-4F39-969F-3EC372683FFD",
                                    "topics":[
                                        {
                                            "title":"3.7.1 Referential Integrity Constraints",
                                            "href":"valid-time-support.html#GUID-FCD91FB2-2067-43A2-AC0D-6C89FF8AE3CF"
                                        },
                                        {
                                            "title":"3.7.2 Unique Constraints",
                                            "href":"valid-time-support.html#GUID-346D05BB-D25A-4EBF-89BA-D73080B705ED"
                                        }
                                    ]
                                },
                                {
                                    "title":"3.8 Locking with Valid Time Support",
                                    "href":"valid-time-support.html#GUID-DC322D50-5D89-4048-87E7-EE731E8701EC"
                                },
                                {
                                    "title":"3.9 Static Data Dictionary Views Affected by Valid Time Support",
                                    "href":"valid-time-support.html#GUID-3D781FD0-B8CF-49C9-8FE8-AE433289968D",
                                    "topics":[
                                        {
                                            "title":"3.9.1 xxx_CONF Views and Valid Time Support",
                                            "href":"valid-time-support.html#GUID-B31D7D71-0BA5-42B7-80A2-D62F28C9301A"
                                        },
                                        {
                                            "title":"3.9.2 xxx_DIFF Views and Valid Time Support",
                                            "href":"valid-time-support.html#GUID-A71DF657-B03F-4CDE-81E7-7E794D5A7158"
                                        },
                                        {
                                            "title":"3.9.3 xxx_HIST Views and Valid Time Support",
                                            "href":"valid-time-support.html#GUID-0C4C7F2D-C0FA-439B-8CB7-7E48BE09F92E"
                                        },
                                        {
                                            "title":"3.9.4 xxx_LOCK Views and Valid Time Support",
                                            "href":"valid-time-support.html#GUID-DD73683C-42B8-4EA5-AA59-A3C6D1D84B7D"
                                        },
                                        {
                                            "title":"3.9.5 xxx_MW Views and Valid Time Support",
                                            "href":"valid-time-support.html#GUID-8F696493-3D66-46DE-B9A1-7E3AFBD739AB"
                                        }
                                    ]
                                },
                                {
                                    "title":"3.10 Adding Valid Time Support to an Existing Table",
                                    "href":"valid-time-support.html#GUID-D7914BBC-70C9-4929-830B-52E09A2319FA"
                                },
                                {
                                    "title":"3.11 Merging and Refreshing Workspaces for Tables with Valid Time Support",
                                    "href":"valid-time-support.html#GUID-65BA356D-F80E-4BF8-8F8E-CC9DD7128C19"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part II Reference Information",
                    "href":"workspace-manager-reference.html#GUID-153535A5-A048-4B53-AEF7-3F346D17EB8F",
                    "topics":[
                        {
                            "title":"4 DBMS_WM Package: Reference",
                            "href":"DBMS_WM-reference.html#GUID-EAC6BFAC-69E2-46C3-8211-8AE8661B6A8B",
                            "topics":[
                                {
                                    "title":"4.1 Add_Topo_Geometry_Layer",
                                    "href":"DBMS_WM-reference.html#GUID-749BE607-FD1E-4F8A-B636-DE0ED3226617"
                                },
                                {
                                    "title":"4.2 AddAsParentWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-004AAD79-DBBF-40EB-A1E6-B6486D9AA2B7"
                                },
                                {
                                    "title":"4.3 AddUserDefinedHint",
                                    "href":"DBMS_WM-reference.html#GUID-64B8A332-64A8-4A46-97D0-CD1072333523"
                                },
                                {
                                    "title":"4.4 AlterSavepoint",
                                    "href":"DBMS_WM-reference.html#GUID-B901C9C6-F2A2-4142-9408-868CE19242F3"
                                },
                                {
                                    "title":"4.5 AlterVersionedTable",
                                    "href":"DBMS_WM-reference.html#GUID-BDD51387-78F7-426C-A753-638C7293FBA6"
                                },
                                {
                                    "title":"4.6 AlterWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-8038D364-E499-477D-BB22-A44DE95AC52D"
                                },
                                {
                                    "title":"4.7 BeginBulkLoading",
                                    "href":"DBMS_WM-reference.html#GUID-807E50CB-6149-413C-9309-BD6C7C270AC2"
                                },
                                {
                                    "title":"4.8 BeginDDL",
                                    "href":"DBMS_WM-reference.html#GUID-FD136E07-B729-4BBF-B352-CB410970007C"
                                },
                                {
                                    "title":"4.9 BeginResolve",
                                    "href":"DBMS_WM-reference.html#GUID-7C121AC5-D041-4829-9085-68CAAA3D4166"
                                },
                                {
                                    "title":"4.10 ChangeWorkspaceType",
                                    "href":"DBMS_WM-reference.html#GUID-D7E43DA3-EDA8-4AED-9D8C-33541F72E66E"
                                },
                                {
                                    "title":"4.11 CommitBulkLoading",
                                    "href":"DBMS_WM-reference.html#GUID-582AB9AE-7600-440E-A6BF-2E6E1789B96A"
                                },
                                {
                                    "title":"4.12 CommitDDL",
                                    "href":"DBMS_WM-reference.html#GUID-FFAFC244-537B-467D-AFC4-F716E18C794E"
                                },
                                {
                                    "title":"4.13 CommitResolve",
                                    "href":"DBMS_WM-reference.html#GUID-3B1197D8-F9F4-4486-A5FD-0F98ADFE3FD2"
                                },
                                {
                                    "title":"4.14 CompressWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-BD1132FA-656F-442D-A940-661E67DC562E"
                                },
                                {
                                    "title":"4.15 CompressWorkspaceTree",
                                    "href":"DBMS_WM-reference.html#GUID-7622FE8D-B9FF-41F9-AF69-8523E10FE535"
                                },
                                {
                                    "title":"4.16 CopyForUpdate",
                                    "href":"DBMS_WM-reference.html#GUID-D445F3A6-B63D-4F99-A225-3EAF2BEEEF4A"
                                },
                                {
                                    "title":"4.17 CopyWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-E585C672-D75E-494F-B01F-6DAD7275000D"
                                },
                                {
                                    "title":"4.18 CreateSavepoint",
                                    "href":"DBMS_WM-reference.html#GUID-29D9C15B-F4F3-405E-A0FA-0EE559BC1DC0"
                                },
                                {
                                    "title":"4.19 CreateWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-963E70CB-491F-4539-A9FD-4CA9E49D75B1"
                                },
                                {
                                    "title":"4.20 Delete_Topo_Geometry_Layer",
                                    "href":"DBMS_WM-reference.html#GUID-6A602951-D490-4C52-A645-0DC24D76E8EC"
                                },
                                {
                                    "title":"4.21 DeleteSavepoint",
                                    "href":"DBMS_WM-reference.html#GUID-482AE003-FB94-463A-95B8-9ABEF2DB9765"
                                },
                                {
                                    "title":"4.22 DisableVersioning",
                                    "href":"DBMS_WM-reference.html#GUID-A7BBE855-07E0-46A5-AB34-22BEFE9049C7"
                                },
                                {
                                    "title":"4.23 EnableVersioning",
                                    "href":"DBMS_WM-reference.html#GUID-41A06CC9-F3F5-40E8-9BDB-29B600DEA7F0"
                                },
                                {
                                    "title":"4.24 Export",
                                    "href":"DBMS_WM-reference.html#GUID-D7EEBBAD-99A5-469F-BAF7-4694031894BA"
                                },
                                {
                                    "title":"4.25 Export_Schemas",
                                    "href":"DBMS_WM-reference.html#GUID-9485C70D-9CF9-4649-8785-06C7D6CF32D6"
                                },
                                {
                                    "title":"4.26 FindRICSet",
                                    "href":"DBMS_WM-reference.html#GUID-FD411BDC-4A2F-49AD-9AA7-D6E4C360E4DE"
                                },
                                {
                                    "title":"4.27 FreezeWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-A065518B-5C98-43E2-BDAE-39B713C38A96"
                                },
                                {
                                    "title":"4.28 GetBulkLoadVersion",
                                    "href":"DBMS_WM-reference.html#GUID-26D6038F-346D-4205-9942-741CBF6C1DBE"
                                },
                                {
                                    "title":"4.29 GetConflictWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-A44158D1-83C5-4640-B437-C482A4C04F01"
                                },
                                {
                                    "title":"4.30 GetDiffVersions",
                                    "href":"DBMS_WM-reference.html#GUID-EC5A3070-D59F-426A-9AAB-DD29E8967447"
                                },
                                {
                                    "title":"4.31 GetLockMode",
                                    "href":"DBMS_WM-reference.html#GUID-DB9DB1DE-650D-478C-875F-D090D5303D44"
                                },
                                {
                                    "title":"4.32 GetMultiWorkspaces",
                                    "href":"DBMS_WM-reference.html#GUID-32F877A2-BDA6-465E-B5D1-878FD5D27851"
                                },
                                {
                                    "title":"4.33 GetOpContext",
                                    "href":"DBMS_WM-reference.html#GUID-417E925B-C280-4E5A-A849-FE20DF17F671"
                                },
                                {
                                    "title":"4.34 GetOriginalDDL",
                                    "href":"DBMS_WM-reference.html#GUID-7B80B0BB-0F29-4A7C-9756-5B9C185F91A8"
                                },
                                {
                                    "title":"4.35 GetPhysicalTableName",
                                    "href":"DBMS_WM-reference.html#GUID-FDA38BE7-1F49-452C-95EA-0BFFAF7C1ED7"
                                },
                                {
                                    "title":"4.36 GetPrivs",
                                    "href":"DBMS_WM-reference.html#GUID-855BBB68-5501-4258-9D36-56D6ECDCD69F"
                                },
                                {
                                    "title":"4.37 GetSessionInfo",
                                    "href":"DBMS_WM-reference.html#GUID-7799C9D4-832E-4938-83C2-2E270A889384"
                                },
                                {
                                    "title":"4.38 GetSystemParameter",
                                    "href":"DBMS_WM-reference.html#GUID-D38442BA-FE40-4073-9516-8133924D3413"
                                },
                                {
                                    "title":"4.39 GetValidFrom",
                                    "href":"DBMS_WM-reference.html#GUID-BD736B55-5845-4A58-94E1-758385BB15DE"
                                },
                                {
                                    "title":"4.40 GetValidTill",
                                    "href":"DBMS_WM-reference.html#GUID-5DB9C2F6-E3CF-4C64-B838-4FED56363244"
                                },
                                {
                                    "title":"4.41 GetVersion",
                                    "href":"DBMS_WM-reference.html#GUID-40E64AE6-D264-4EAB-AA00-9BEEFCFBB028"
                                },
                                {
                                    "title":"4.42 GetWMMetadataSpace",
                                    "href":"DBMS_WM-reference.html#GUID-9E9D39E5-4730-4662-AE6B-08E791F445B3"
                                },
                                {
                                    "title":"4.43 GetWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-A6AA36EC-68EF-4D11-82E2-C06A0FF179E0"
                                },
                                {
                                    "title":"4.44 GotoDate",
                                    "href":"DBMS_WM-reference.html#GUID-2FFB3060-0090-446C-A05C-1820FEFE0D3C"
                                },
                                {
                                    "title":"4.45 GotoSavepoint",
                                    "href":"DBMS_WM-reference.html#GUID-F3FCD07D-04AF-4A47-B316-B3B7C7559D32"
                                },
                                {
                                    "title":"4.46 GotoWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-E0CEA17F-C92A-4748-A83D-3528DE709752"
                                },
                                {
                                    "title":"4.47 GrantGraphPriv",
                                    "href":"DBMS_WM-reference.html#GUID-39C9378B-3953-44FD-AD77-9275C3AC3206"
                                },
                                {
                                    "title":"4.48 GrantPrivsOnPolicy",
                                    "href":"DBMS_WM-reference.html#GUID-DC094185-BAA1-44DF-9862-2B836D30AE84"
                                },
                                {
                                    "title":"4.49 GrantSystemPriv",
                                    "href":"DBMS_WM-reference.html#GUID-FBF27704-B018-44AF-9E2C-11F3FC0591CB"
                                },
                                {
                                    "title":"4.50 GrantWorkspacePriv",
                                    "href":"DBMS_WM-reference.html#GUID-94FF7741-B410-421E-9611-02C73C89F50A"
                                },
                                {
                                    "title":"4.51 Import",
                                    "href":"DBMS_WM-reference.html#GUID-518A4A47-7656-426F-ADEC-5F55BCF19BCB"
                                },
                                {
                                    "title":"4.52 Import_Schemas",
                                    "href":"DBMS_WM-reference.html#GUID-6D2622FC-9B46-43D1-9F6F-E7870D3235C6"
                                },
                                {
                                    "title":"4.53 Initialize_After_Import",
                                    "href":"DBMS_WM-reference.html#GUID-70EBFE27-43F0-49D2-85F8-9E1BBA33D2CC"
                                },
                                {
                                    "title":"4.54 IsWorkspaceOccupied",
                                    "href":"DBMS_WM-reference.html#GUID-C604469C-196E-4945-B64F-63D212A9A9DC"
                                },
                                {
                                    "title":"4.55 LockRows",
                                    "href":"DBMS_WM-reference.html#GUID-3E905EE1-EB83-4E87-AC38-F56F14C90E02"
                                },
                                {
                                    "title":"4.56 MergeTable",
                                    "href":"DBMS_WM-reference.html#GUID-025C9C04-73BD-4AD6-91AA-029EE4D50F4A"
                                },
                                {
                                    "title":"4.57 MergeWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-638B284A-0A7F-4D3F-8DD7-D302489B29C7"
                                },
                                {
                                    "title":"4.58 Move_Proc",
                                    "href":"DBMS_WM-reference.html#GUID-430A49CE-60E2-49E7-93B3-79EA9BB451A8"
                                },
                                {
                                    "title":"4.59 PurgeTable",
                                    "href":"DBMS_WM-reference.html#GUID-3D5AD8D6-B9AA-41BC-8293-7381BD40FD48"
                                },
                                {
                                    "title":"4.60 RecoverAllMigratingTables",
                                    "href":"DBMS_WM-reference.html#GUID-FA1AAE2C-BC85-4B73-80CC-013ED66BF68D"
                                },
                                {
                                    "title":"4.61 RecoverFromDroppedUser",
                                    "href":"DBMS_WM-reference.html#GUID-49EEFAF8-6F4D-400C-89EE-8737ED123686"
                                },
                                {
                                    "title":"4.62 RecoverMigratingTable",
                                    "href":"DBMS_WM-reference.html#GUID-AFB051D1-F955-4A5C-AAF4-7C993D78682C"
                                },
                                {
                                    "title":"4.63 RefreshTable",
                                    "href":"DBMS_WM-reference.html#GUID-6600B232-A8C2-4564-B0DD-227F7271317A"
                                },
                                {
                                    "title":"4.64 RefreshWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-E4AE382B-FF99-4333-8F21-A56DE5318338"
                                },
                                {
                                    "title":"4.65 RemoveAsParentWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-07E70E51-54F0-4E80-9BCF-D0E8F0A4132C"
                                },
                                {
                                    "title":"4.66 RemoveDeferredWorkspaces",
                                    "href":"DBMS_WM-reference.html#GUID-2BEC6D36-976E-43D6-824D-4DAD1B2BC77B"
                                },
                                {
                                    "title":"4.67 RemoveUserDefinedHint",
                                    "href":"DBMS_WM-reference.html#GUID-960F2ECB-7FCF-4020-A468-89638CCF06AD"
                                },
                                {
                                    "title":"4.68 RemoveWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-C2D5232B-C82F-4D1F-8FDE-D5800EF5DE13"
                                },
                                {
                                    "title":"4.69 RemoveWorkspaceTree",
                                    "href":"DBMS_WM-reference.html#GUID-C6B0F84A-9649-425B-97CF-0299344F2C68"
                                },
                                {
                                    "title":"4.70 RenameSavepoint",
                                    "href":"DBMS_WM-reference.html#GUID-AD4A6CB1-2D3F-4A31-A127-999F6A7D16E8"
                                },
                                {
                                    "title":"4.71 RenameWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-402CD84D-C69D-48D7-BCA9-588DF72D4B3F"
                                },
                                {
                                    "title":"4.72 ResolveConflicts",
                                    "href":"DBMS_WM-reference.html#GUID-BB8F408D-4908-41A4-8DEC-94A0B2F3EAFB"
                                },
                                {
                                    "title":"4.73 RevokeGraphPriv",
                                    "href":"DBMS_WM-reference.html#GUID-C1F79700-C94D-4EA4-8225-F65F1D88A9FF"
                                },
                                {
                                    "title":"4.74 RevokeSystemPriv",
                                    "href":"DBMS_WM-reference.html#GUID-71372D9F-7204-4EEF-80BB-082F01BD9AC7"
                                },
                                {
                                    "title":"4.75 RevokeWorkspacePriv",
                                    "href":"DBMS_WM-reference.html#GUID-39D519F5-518C-47A5-8515-5D01830EE0D0"
                                },
                                {
                                    "title":"4.76 RollbackBulkLoading",
                                    "href":"DBMS_WM-reference.html#GUID-788ED49B-53C3-4C24-B129-4512EA8D02C6"
                                },
                                {
                                    "title":"4.77 RollbackDDL",
                                    "href":"DBMS_WM-reference.html#GUID-67B1E4A4-D9CE-4AF8-8D40-2508FF560AC4"
                                },
                                {
                                    "title":"4.78 RollbackResolve",
                                    "href":"DBMS_WM-reference.html#GUID-D2ABD2E1-03E1-4753-AF3A-3095C66C4FA6"
                                },
                                {
                                    "title":"4.79 RollbackTable",
                                    "href":"DBMS_WM-reference.html#GUID-7AB0F531-1C20-48CA-893D-EE252A57EA73"
                                },
                                {
                                    "title":"4.80 RollbackToSP",
                                    "href":"DBMS_WM-reference.html#GUID-4EC5FEC9-3BCD-48A9-BD44-55F9B6933F74"
                                },
                                {
                                    "title":"4.81 RollbackWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-34F03A7E-6280-4231-BFBC-28D0FEB0486C"
                                },
                                {
                                    "title":"4.82 SetCaptureEvent",
                                    "href":"DBMS_WM-reference.html#GUID-9D766800-9C80-440A-82EB-8FFD56062641"
                                },
                                {
                                    "title":"4.83 SetCompressWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-32FAEBE5-96A1-4479-B0A5-321DF53DD298"
                                },
                                {
                                    "title":"4.84 SetConflictWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-E1A29A5C-4027-40FB-8334-78811C1AACE7"
                                },
                                {
                                    "title":"4.85 SetDiffVersions",
                                    "href":"DBMS_WM-reference.html#GUID-4E8AF87C-19F9-47EA-90D6-E6CB42212EAE"
                                },
                                {
                                    "title":"4.86 SetLockingOFF",
                                    "href":"DBMS_WM-reference.html#GUID-3490DEA9-9606-4161-BDD7-9BBBCD49BC02"
                                },
                                {
                                    "title":"4.87 SetLockingON",
                                    "href":"DBMS_WM-reference.html#GUID-01000F19-02A8-4D2D-AA5E-DD66D321C5BC"
                                },
                                {
                                    "title":"4.88 SetMultiWorkspaces",
                                    "href":"DBMS_WM-reference.html#GUID-966C4250-69C2-4730-B9DF-1F74C28B624D"
                                },
                                {
                                    "title":"4.89 SetSystemParameter",
                                    "href":"DBMS_WM-reference.html#GUID-3DF05DFE-4D98-4F09-AB40-2CDA0A0F3EFD"
                                },
                                {
                                    "title":"4.90 SetTriggerEvents",
                                    "href":"DBMS_WM-reference.html#GUID-553D3DB5-BE0F-4739-B23E-622C0E205575"
                                },
                                {
                                    "title":"4.91 SetValidTime",
                                    "href":"DBMS_WM-reference.html#GUID-A42995A7-4941-42E7-B3FC-A812B16FF0AB"
                                },
                                {
                                    "title":"4.92 SetValidTimeFilterOFF",
                                    "href":"DBMS_WM-reference.html#GUID-65DC79C5-03C9-4B5E-9599-27CFAEFB4E96"
                                },
                                {
                                    "title":"4.93 SetValidTimeFilterON",
                                    "href":"DBMS_WM-reference.html#GUID-956A01D4-C967-4720-B8B6-3EEBBE4C1AC6"
                                },
                                {
                                    "title":"4.94 SetWMValidUpdateModeOFF",
                                    "href":"DBMS_WM-reference.html#GUID-4A3C4F86-2068-4F09-91AC-3D029A970470"
                                },
                                {
                                    "title":"4.95 SetWMValidUpdateModeON",
                                    "href":"DBMS_WM-reference.html#GUID-3E1E6BCC-110A-4DE7-9DB2-C10C5E2362D2"
                                },
                                {
                                    "title":"4.96 SetWoOverwriteOFF",
                                    "href":"DBMS_WM-reference.html#GUID-C183F00A-F4D6-4520-848C-53081CD53125"
                                },
                                {
                                    "title":"4.97 SetWoOverwriteON",
                                    "href":"DBMS_WM-reference.html#GUID-B1F6F1F6-8109-4B46-8D57-4ACBC71FDAF8"
                                },
                                {
                                    "title":"4.98 SetWorkspaceLockModeOFF",
                                    "href":"DBMS_WM-reference.html#GUID-56EF1E09-DC70-4D65-9900-684D23F808FE"
                                },
                                {
                                    "title":"4.99 SetWorkspaceLockModeON",
                                    "href":"DBMS_WM-reference.html#GUID-059FC3D2-2BB9-4D81-B2B4-4706E82DE19E"
                                },
                                {
                                    "title":"4.100 UnfreezeWorkspace",
                                    "href":"DBMS_WM-reference.html#GUID-147F3D3A-8986-4ECC-947D-BEC14D8400BF"
                                },
                                {
                                    "title":"4.101 UnlockRows",
                                    "href":"DBMS_WM-reference.html#GUID-F9A2C759-00F0-4862-B8DB-6E81C7A156B3"
                                },
                                {
                                    "title":"4.102 UseDefaultValuesForNulls",
                                    "href":"DBMS_WM-reference.html#GUID-03D8AFE2-7847-4CBA-BCFE-68A7F1C0914C"
                                }
                            ]
                        },
                        {
                            "title":"5 Workspace Manager Static Data Dictionary Views",
                            "href":"workspace-manager-views.html#GUID-6CA43834-04A8-412F-9A3D-849295B7B4C5",
                            "topics":[
                                {
                                    "title":"5.1 ALL_MP_GRAPH_WORKSPACES",
                                    "href":"workspace-manager-views.html#GUID-33EB33CE-2D52-4E83-A75E-94CA5DF645FE"
                                },
                                {
                                    "title":"5.2 ALL_MP_PARENT_WORKSPACES",
                                    "href":"workspace-manager-views.html#GUID-73EA55AF-B5EB-4E39-B11B-8F9A24916210"
                                },
                                {
                                    "title":"5.3 ALL_REMOVED_WORKSPACES",
                                    "href":"workspace-manager-views.html#GUID-ACBB6615-A78E-46F9-8C5B-49A81D282361"
                                },
                                {
                                    "title":"5.4 ALL_VERSION_HVIEW",
                                    "href":"workspace-manager-views.html#GUID-A50DCBE5-0642-4DAB-B619-4364B93A2031"
                                },
                                {
                                    "title":"5.5 ALL_WM_CONS_COLUMNS",
                                    "href":"workspace-manager-views.html#GUID-B1B334B0-53BD-4D03-AF86-A453F93AECDA"
                                },
                                {
                                    "title":"5.6 ALL_WM_CONSTRAINT_VIOLATIONS",
                                    "href":"workspace-manager-views.html#GUID-03AE71C9-BF49-4875-897C-2BA526F6DC6C"
                                },
                                {
                                    "title":"5.7 ALL_WM_CONSTRAINTS",
                                    "href":"workspace-manager-views.html#GUID-13626DE8-6FAC-4BFD-B4E2-3417B5842E2F"
                                },
                                {
                                    "title":"5.8 ALL_WM_IND_COLUMNS",
                                    "href":"workspace-manager-views.html#GUID-A6E1E46E-24B0-4219-BF02-7DD6F4EE9CC4"
                                },
                                {
                                    "title":"5.9 ALL_WM_IND_EXPRESSIONS",
                                    "href":"workspace-manager-views.html#GUID-AFA76FEB-7ADA-4442-98B9-D061ABBE649B"
                                },
                                {
                                    "title":"5.10 ALL_WM_LOCKED_TABLES",
                                    "href":"workspace-manager-views.html#GUID-3FCE1CFD-1044-44C0-BF47-608B0C5F35BE"
                                },
                                {
                                    "title":"5.11 ALL_WM_MODIFIED_TABLES",
                                    "href":"workspace-manager-views.html#GUID-92CC797C-FB28-4892-9C85-618D2278FAA3"
                                },
                                {
                                    "title":"5.12 ALL_WM_POLICIES",
                                    "href":"workspace-manager-views.html#GUID-C5CB98B4-FBA3-48CE-8A0C-2135C1345CA8"
                                },
                                {
                                    "title":"5.13 ALL_WM_RIC_INFO",
                                    "href":"workspace-manager-views.html#GUID-2F504FEF-8BEF-4CE8-AF54-3A89F52F64E6"
                                },
                                {
                                    "title":"5.14 ALL_WM_TAB_TRIGGERS",
                                    "href":"workspace-manager-views.html#GUID-51ED5FB0-EF5E-408B-8B0C-47BB46D9BC50"
                                },
                                {
                                    "title":"5.15 ALL_WM_VERSIONED_TABLES",
                                    "href":"workspace-manager-views.html#GUID-DE8F4064-F3D9-40AA-8C5B-63B22CEA3609"
                                },
                                {
                                    "title":"5.16 ALL_WM_VT_ERRORS",
                                    "href":"workspace-manager-views.html#GUID-63966C2B-D38C-404F-8B21-78EFE343E51A"
                                },
                                {
                                    "title":"5.17 ALL_WORKSPACE_PRIVS",
                                    "href":"workspace-manager-views.html#GUID-1DF9B13B-72BB-4B7D-A166-63A4AF9872D5"
                                },
                                {
                                    "title":"5.18 ALL_WORKSPACE_SAVEPOINTS",
                                    "href":"workspace-manager-views.html#GUID-FA46DEDC-75C8-44C2-9FBB-F5DB1AFCCAA6"
                                },
                                {
                                    "title":"5.19 ALL_WORKSPACES",
                                    "href":"workspace-manager-views.html#GUID-27A9DAA1-F498-44E5-B1CD-E1031D358EC1"
                                },
                                {
                                    "title":"5.20 DBA_REMOVED_WORKSPACES",
                                    "href":"workspace-manager-views.html#GUID-EB84FCB9-FA73-4136-B779-59864AEDB695"
                                },
                                {
                                    "title":"5.21 DBA_WM_SYS_PRIVS",
                                    "href":"workspace-manager-views.html#GUID-55498657-DAF3-4B24-93B5-506EB6AD9C5D"
                                },
                                {
                                    "title":"5.22 DBA_WM_VERSIONED_TABLES",
                                    "href":"workspace-manager-views.html#GUID-9CA9A2E0-0BB4-4E4E-9AD1-EF2D6C09A42F"
                                },
                                {
                                    "title":"5.23 DBA_WM_VT_ERRORS",
                                    "href":"workspace-manager-views.html#GUID-77A8C807-242C-4BA7-B822-03D944338194"
                                },
                                {
                                    "title":"5.24 DBA_WORKSPACE_PRIVS",
                                    "href":"workspace-manager-views.html#GUID-4F69E104-5570-44E9-92CF-343EA380E862"
                                },
                                {
                                    "title":"5.25 DBA_WORKSPACE_SAVEPOINTS",
                                    "href":"workspace-manager-views.html#GUID-DED79FD0-FA4F-4AC6-92A4-D19FB30FD459"
                                },
                                {
                                    "title":"5.26 DBA_WORKSPACE_SESSIONS",
                                    "href":"workspace-manager-views.html#GUID-FF19EBDE-F934-4929-9E11-8F932B50E579"
                                },
                                {
                                    "title":"5.27 DBA_WORKSPACES",
                                    "href":"workspace-manager-views.html#GUID-0A25E402-5693-4B4E-9CC4-4B9C69E9F602"
                                },
                                {
                                    "title":"5.28 ROLE_WM_PRIVS",
                                    "href":"workspace-manager-views.html#GUID-EB475DFD-834E-4501-B9E7-19E271B6FE27"
                                },
                                {
                                    "title":"5.29 USER_MP_GRAPH_WORKSPACES",
                                    "href":"workspace-manager-views.html#GUID-CF525DD5-75E1-4014-B963-BA80CC1FDD19"
                                },
                                {
                                    "title":"5.30 USER_MP_PARENT_WORKSPACES",
                                    "href":"workspace-manager-views.html#GUID-7D5FE9D3-FA4F-4BCF-98C6-47CE27FCFC95"
                                },
                                {
                                    "title":"5.31 USER_REMOVED_WORKSPACES",
                                    "href":"workspace-manager-views.html#GUID-5B032FDF-5C5F-45EF-996A-AAC74DB7CCC8"
                                },
                                {
                                    "title":"5.32 USER_WM_CONS_COLUMNS",
                                    "href":"workspace-manager-views.html#GUID-8C7EBA24-2B38-47CF-B80E-C4DD68A8F833"
                                },
                                {
                                    "title":"5.33 USER_WM_CONSTRAINTS",
                                    "href":"workspace-manager-views.html#GUID-7846EB0A-3391-47B3-A396-146A4C84ADAB"
                                },
                                {
                                    "title":"5.34 USER_WM_IND_COLUMNS",
                                    "href":"workspace-manager-views.html#GUID-32606FA7-D057-4211-9C6F-4C5E47BF2F0F"
                                },
                                {
                                    "title":"5.35 USER_WM_IND_EXPRESSIONS",
                                    "href":"workspace-manager-views.html#GUID-A4EC34A0-04A1-48A3-95F4-BC2661D29322"
                                },
                                {
                                    "title":"5.36 USER_WM_LOCKED_TABLES",
                                    "href":"workspace-manager-views.html#GUID-37D7AAF6-4945-41F6-867E-88565FF7287E"
                                },
                                {
                                    "title":"5.37 USER_WM_MODIFIED_TABLES",
                                    "href":"workspace-manager-views.html#GUID-5B1C238F-A8D7-4D2F-9E86-AC474C477AEE"
                                },
                                {
                                    "title":"5.38 USER_WM_POLICIES",
                                    "href":"workspace-manager-views.html#GUID-D8416882-755E-4810-AA83-68E4A1D3005F"
                                },
                                {
                                    "title":"5.39 USER_WM_PRIVS",
                                    "href":"workspace-manager-views.html#GUID-AE7AB9FE-A814-44B0-B427-D2BD7C46C7EC"
                                },
                                {
                                    "title":"5.40 USER_WM_RIC_INFO",
                                    "href":"workspace-manager-views.html#GUID-A70ECEB3-8E1C-49C4-9128-EC5682C97A2F"
                                },
                                {
                                    "title":"5.41 USER_WM_TAB_TRIGGERS",
                                    "href":"workspace-manager-views.html#GUID-B7BD1AF3-1C2B-41BF-BD7D-33B73B574D5F"
                                },
                                {
                                    "title":"5.42 USER_WM_VERSIONED_TABLES",
                                    "href":"workspace-manager-views.html#GUID-B27599B4-47E5-41BC-B7F9-3D7A1559E34A"
                                },
                                {
                                    "title":"5.43 USER_WM_VT_ERRORS",
                                    "href":"workspace-manager-views.html#GUID-37DB5BEC-A2A3-4FAE-87FE-ECB52CFC5CB1"
                                },
                                {
                                    "title":"5.44 USER_WORKSPACE_PRIVS",
                                    "href":"workspace-manager-views.html#GUID-BBFF2A65-7E26-4141-98C6-BC2C3D038309"
                                },
                                {
                                    "title":"5.45 USER_WORKSPACE_SAVEPOINTS",
                                    "href":"workspace-manager-views.html#GUID-15C62D93-8949-4274-A968-960549A10521"
                                },
                                {
                                    "title":"5.46 USER_WORKSPACES",
                                    "href":"workspace-manager-views.html#GUID-CC5E908A-0131-4D5B-BFE8-4E05B58D3355"
                                },
                                {
                                    "title":"5.47 WM_COMPRESS_BATCH_SIZES",
                                    "href":"workspace-manager-views.html#GUID-595CFD20-6CD4-4CBF-8BAF-8DEBB43289BD"
                                },
                                {
                                    "title":"5.48 WM_COMPRESSIBLE_TABLES",
                                    "href":"workspace-manager-views.html#GUID-9329DA4F-3ADD-467D-811A-FAE87A183B82"
                                },
                                {
                                    "title":"5.49 WM_EVENTS_INFO",
                                    "href":"workspace-manager-views.html#GUID-823B258D-55A8-4C69-9E4A-42D2D287F621"
                                },
                                {
                                    "title":"5.50 WM_INSTALLATION",
                                    "href":"workspace-manager-views.html#GUID-77BA7A54-D817-454A-A287-D092F7BFDFC1"
                                },
                                {
                                    "title":"5.51 xxx_CONF Views",
                                    "href":"workspace-manager-views.html#GUID-AE3D058A-EF08-4955-A38F-A3A159B0978C"
                                },
                                {
                                    "title":"5.52 xxx_DIFF Views",
                                    "href":"workspace-manager-views.html#GUID-12AF51CC-34CD-4A22-93AA-CD7944A53C57"
                                },
                                {
                                    "title":"5.53 xxx_HIST Views",
                                    "href":"workspace-manager-views.html#GUID-B927E3B1-4339-43B9-8C97-F903664DABCD"
                                },
                                {
                                    "title":"5.54 xxx_LOCK Views",
                                    "href":"workspace-manager-views.html#GUID-2628A3F5-5873-46B7-A94A-E2660A597CF5"
                                },
                                {
                                    "title":"5.55 xxx_MW Views",
                                    "href":"workspace-manager-views.html#GUID-2091F8E5-C052-464D-9FDD-12E99EBE523B"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part III Supplementary Information",
                    "href":"workspace-manager-supplementary-information.html#GUID-BCF1EF01-59CE-46C4-A369-6BCB0635B6F2"
                },
                {
                    "title":"A Installing Workspace Manager with Custom Databases",
                    "href":"installing-workspace-manager-custom-databases.html#GUID-3BCA3F05-872A-4F53-80A6-93AA2CC287CC"
                },
                {
                    "title":"B Workspace Manager Error Messages",
                    "href":"workspace-manager-error-messages.html#GUID-17EA7C2A-E64F-4CB1-9F64-EE712D0BAA8A"
                },
                {
                    "title":"Glossary",
                    "href":"workspace-manager-glossary.html#GUID-F0DFCAA4-15CE-4A81-A06D-20D4A6A4A410"
                },
                {
                    "title":"Index",
                    "href":"book-index.html"
                }
            ]
        }
    ]
});