import mongoose from "mongoose";
import DaysOfWeekEnum from "../enums/DaysOfWeekEnum"
const SchemaTypes = mongoose.Schema.Types;

// Define the database model
const PeriodSchema = new mongoose.Schema({
        place_name: {
            type: String,
            maxlength: 200,
            minlength: 0
        },
        start_period: {
            type: String,
            maxlength: 5,
            minlength: 0
        },
        end_period: {
            type: String,
            maxlength: 5,
            minlength: 0
        },
        day_of_week: {
            type: String,
            enum: [
                DaysOfWeekEnum.getDaysOfWeekEnum().MONDAY,
                DaysOfWeekEnum.getDaysOfWeekEnum().TUESDAY,
                DaysOfWeekEnum.getDaysOfWeekEnum().WEDNESDAY,
                DaysOfWeekEnum.getDaysOfWeekEnum().THURSDAY,
                DaysOfWeekEnum.getDaysOfWeekEnum().FRIDAY,
                DaysOfWeekEnum.getDaysOfWeekEnum().SATURDAY,
                DaysOfWeekEnum.getDaysOfWeekEnum().SUNDAY
            ]
        },
        address: {
            type: SchemaTypes.ObjectId,
            ref: 'Address',
        },
        deleted_at: {
            type: Date
        }
    },
    {
        timestamps: true //generate the createAt and updateAt
    }
);

PeriodSchema.index({_id: 1, deleted_at: 1});

module.exports = mongoose.model('Period', PeriodSchema);