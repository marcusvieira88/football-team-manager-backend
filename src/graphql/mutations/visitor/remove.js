import {GraphQLID, GraphQLNonNull} from 'graphql';
import visitorType from '../../types/visitor/visitor';
import VisitorSchema from '../../../models/VisitorSchema';
import Helpers from '../../../utils/Helpers';

export default {
    type: visitorType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve (root, params, options) {
        Helpers.checkUserUnauthorized(context);

        const removedVisitor = await VisitorSchema
            .findByIdAndRemove(params._id)
            .exec();

        if (!removedVisitor) {
            throw new Error('Error removing visitor');
        }

        return removedVisitor;
    }
};
