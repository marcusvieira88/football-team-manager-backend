import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import visitorType from '../../types/visitor/insert-input-visitor';
import VisitorSchema from '../../../models/VisitorSchema';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(visitorType)
        }
    },
    async resolve(root, params, options) {
        const visitorModel = new VisitorSchema(params.data);
        const newVisitor = await visitorModel.save();

        if (!newVisitor) {
            throw new Error('Error adding new visitor');
        }
        return true;
    }
};