import {GraphQLID, GraphQLNonNull} from 'graphql';
import visitorType from '../../types/visitor/visitor';
import VisitorSchema from '../../../models/VisitorSchema';

export default {
    type: visitorType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, ctx, options) {

        return VisitorSchema
            .findById(params.id)
            .exec();
    }
};