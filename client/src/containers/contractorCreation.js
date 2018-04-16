import { connect } from 'react-redux';
import { 
    contractorActionTors as creators,
    userActionTors } from '../ducks';
import ContractorForm from '../components/contractorForm';

const mapStateToProps = (state, ownProps) => {
    return { users: state.users.all }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addContractor: (data) => {
            const payload = { taskId: ownProps.taskId, ...data };
            dispatch(creators.createRequest(payload, ownProps.onContractorSave));
        },
        loadUsers: ()  => {
            dispatch(userActionTors.fetchRequest({}));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContractorForm)
