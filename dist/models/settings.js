"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const socialLinksSchema = new mongoose_1.Schema({
    id: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    }
}, { _id: false });
exports.mediaObject = {
    _id: {
        type: String,
        default: ''
    },
    imageUrl: {
        type: String,
        default: ''
    },
    fileName: {
        type: String,
        default: ''
    },
    fileType: {
        type: String,
        default: ''
    },
    s3Path: {
        type: String,
        default: ''
    },
    fileSizeInMb: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Number,
        default: Date.now()
    },
    sortIndex: {
        type: Number,
        default: 0
    }
};
exports.ModelSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: ''
    },
    branchId: {
        type: String,
        default: ''
    },
    bannerUrl: {
        type: String,
        default: ''
    },
    autoAssignQueue: {
        type: Boolean,
        default: false
    },
    isWeeklyOpened: {
        type: Boolean,
        default: true
    },
    tvDisplayType: {
        type: String,
        default: 'queue'
    },
    operationHours: [
        {
            _id: {
                type: String,
                default: ''
            },
            startValue: {
                type: Number,
                default: 0
            },
            endValue: {
                type: Number,
                default: 0
            },
            enabled: {
                type: Boolean,
                default: false
            },
            day: {
                type: Number,
                default: null
            },
            isWholeDay: {
                type: Boolean,
                default: false
            }
        }
    ],
    gallery: [exports.mediaObject],
    advertisements: [exports.mediaObject],
    storageUsedInMb: {
        type: Number,
        default: 0
    },
    storageLimitInMb: {
        type: Number,
        default: 1000
    },
    enableCustomQr: {
        type: Boolean,
        default: false
    },
    customQrLink: {
        type: String,
        default: ''
    },
    imagePreviewDuration: {
        type: Number,
        default: 3
    },
    reservationTimeSlots: {
        availableDays: [
            {
                type: Number,
                default: 0
            }
        ],
        timeLists: [
            {
                capacity: {
                    type: Number,
                    default: 0
                },
                value: {
                    type: Number,
                    default: 0
                },
                id: {
                    type: String,
                    default: ''
                },
                createdAt: {
                    type: Number,
                    default: Date.now()
                }
            }
        ]
    },
    reservationSettings: {
        cutOffHours: {
            type: Number,
            default: 3
        },
        timeSlots: [
            {
                _id: {
                    type: String,
                    default: ''
                },
                day: {
                    type: Number,
                    default: 0
                },
                lists: [
                    {
                        capacity: {
                            type: Number,
                            default: 0
                        },
                        value: {
                            type: Number,
                            default: 0
                        },
                        _id: {
                            type: String,
                            default: ''
                        },
                        createdAt: {
                            type: Number,
                            default: Date.now()
                        }
                    }
                ]
            }
        ]
    },
    contacts: [
        {
            _id: {
                type: String,
                default: ''
            },
            isPrimary: {
                type: Boolean,
                default: false
            },
            number: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: ''
            }
        }
    ],
    modules: [
        {
            type: Number
        }
    ],
    socialLinks: [
        socialLinksSchema
    ],
    printingDetails: {
        status: {
            type: Boolean,
            default: false
        },
        qrDesc: {
            type: String,
            default: ''
        },
        qrLink: {
            type: String,
            default: ''
        }
    },
    smsSettings: {
        status: {
            type: Boolean,
            default: true
        },
        notifyNo: {
            type: Number,
            default: 3
        },
        costValue: {
            type: Number,
            default: 0.40
        }
    },
    smsConfig: {
        number: {
            type: Number,
            default: 0
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    smsCredit: {
        consumed: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 0
        }
    },
    seatsCapacity: {
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 0
        }
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        }
    },
    totalQueueGroup: {
        type: Number,
        default: Date.now()
    },
    createdAt: {
        type: Number,
        default: Date.now()
    },
    updatedAt: {
        type: Number,
        default: Date.now()
    }
});
//new Logs(ModelSchema, 'branches')
exports.default = mongoose_1.model("settings", exports.ModelSchema);