define(
{
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
                {
                    "title":"About the REST APIs",
                    "href":"index.html"
                },
                {
                    "title":"All REST Endpoints",
                    "href":"rest-endpoints.html"
                }
            ]
        },
        {
            "heading":"Get Started",
            "topics":[
                {
                    "title":"Quick Start",
                    "href":"QuickStart.html"
                },
                {
                    "title":"Supported Methods",
                    "href":"supported-methods.html"
                },
                {
                    "title":"Status Codes",
                    "href":"Status-Codes.html"
                },
                {
                    "title":"Authentication",
                    "href":"Authentication.html",
                    "topics":[
                        {
                            "title":"Authentication for Rapid Home Provisioning",
                            "href":"Authentication-RHP.html"
                        }
                    ]
                },
                {
                    "title":"Use cURL",
                    "href":"Use-cURL.html"
                }
            ]
        },
        {
            "heading":"Tasks",
            "topics":[
                {
                    "title":"Rapid Home Provisioning",
                    "topics":[
                        {
                            "title":"Manage Gold Images",
                            "href":"api-rapid-home-provisioning-manage-gold-images.html",
                            "topics":[
                                {
                                    "title":"Add a new image series",
                                    "href":"op-series-seriesid-post.html"
                                },
                                {
                                    "title":"Add image to series",
                                    "href":"op-series-seriesid-images-imageid-post.html"
                                },
                                {
                                    "title":"Delete image series",
                                    "href":"op-series-seriesid-delete.html"
                                },
                                {
                                    "title":"Deletes the specified image name",
                                    "href":"op-images-imageid-delete.html"
                                },
                                {
                                    "title":"Display the configuration of the specified image",
                                    "href":"op-images-imageid-get.html"
                                },
                                {
                                    "title":"Get all the series",
                                    "href":"op-series-get.html"
                                },
                                {
                                    "title":"Get image series",
                                    "href":"op-series-seriesid-get.html"
                                },
                                {
                                    "title":"Lists all the gold images",
                                    "href":"op-images-get.html"
                                },
                                {
                                    "title":"Lists all the gold images that matches the specified query parameters.",
                                    "href":"op-images-search-get.html"
                                },
                                {
                                    "title":"Remove image from series",
                                    "href":"op-series-seriesid-images-imageid-delete.html"
                                },
                                {
                                    "title":"Schedules an import image operation",
                                    "href":"op-images-post.html"
                                },
                                {
                                    "title":"Search series matching certain parameters",
                                    "href":"op-series-search-get.html"
                                },
                                {
                                    "title":"Subscribe a user to a series",
                                    "href":"op-series-seriesid-users-userid-post.html"
                                },
                                {
                                    "title":"Unsubscribe a user from a series",
                                    "href":"op-series-seriesid-users-userid-delete.html"
                                }
                            ]
                        },
                        {
                            "title":"Manage Operation Results",
                            "href":"api-rapid-home-provisioning-manage-operation-results.html",
                            "topics":[
                                {
                                    "title":"Get all the jobs",
                                    "href":"op-jobs-get.html"
                                },
                                {
                                    "title":"Get job details",
                                    "href":"op-jobs-jobid-get.html"
                                },
                                {
                                    "title":"Get the job output and result",
                                    "href":"op-jobs-jobid-output-get.html"
                                }
                            ]
                        },
                        {
                            "title":"Patch Software homes",
                            "href":"api-rapid-home-provisioning-patch-software-homes.html",
                            "topics":[
                                {
                                    "title":"Patch an Oracle Database Software home",
                                    "href":"op-workingcopies-workingcopyid-databases-patch.html"
                                },
                                {
                                    "title":"Patch Grid Infrastructure Software home",
                                    "href":"op-workingcopies-workingcopyid-gihome-destwcid-patch.html"
                                }
                            ]
                        },
                        {
                            "title":"Patch Unmanaged Software Homes",
                            "href":"api-rapid-home-provisioning-patch-unmanaged-software-homes.html",
                            "topics":[
                                {
                                    "title":"Patch an unmanaged Oracle Database Software home",
                                    "href":"op-databases-patch.html"
                                },
                                {
                                    "title":"Patch unmanaged Grid Infrastructure Software home",
                                    "href":"op-gihome-destwcid-patch.html"
                                }
                            ]
                        },
                        {
                            "title":"Provisioning Software homes",
                            "href":"api-rapid-home-provisioning-provisioning-software-homes.html",
                            "topics":[
                                {
                                    "title":"Create Oracle Database Software",
                                    "href":"op-workingcopies-workingcopyid-databases-post.html"
                                },
                                {
                                    "title":"Create working copy",
                                    "href":"op-workingcopies-post.html"
                                },
                                {
                                    "title":"Get all working copies",
                                    "href":"op-workingcopies-get.html"
                                },
                                {
                                    "title":"Get working copies based on a certain image type",
                                    "href":"op-workingcopies-imagetypes-imagetype-get.html"
                                },
                                {
                                    "title":"Get working copy details",
                                    "href":"op-workingcopies-workingcopyid-get.html"
                                },
                                {
                                    "title":"Search working copies",
                                    "href":"op-workingcopies-search-get.html"
                                }
                            ]
                        },
                        {
                            "title":"Upgrade Software homes",
                            "href":"api-rapid-home-provisioning-upgrade-software-homes.html",
                            "topics":[
                                {
                                    "title":"Upgrade an Oracle Database Software home",
                                    "href":"op-workingcopies-workingcopyid-databases-dbuniquename-put.html"
                                },
                                {
                                    "title":"Upgrade Grid Infrastructure Software home",
                                    "href":"op-workingcopies-workingcopyid-gihome-destwcid-put.html"
                                }
                            ]
                        },
                        {
                            "title":"Upgrade Unmanaged Software Homes",
                            "href":"api-rapid-home-provisioning-upgrade-unmanaged-software-homes.html",
                            "topics":[
                                {
                                    "title":"Upgrade an unmanaged Oracle Database Software home",
                                    "href":"op-databases-dbuniquename-put.html"
                                },
                                {
                                    "title":"Upgrade unmanaged Grid Infrastructure Software home",
                                    "href":"op-gihome-destwcid-put.html"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});