import {connect} from 'react-redux'
import WithImmutablePropsToJs from 'with-immutable-props-to-js'
import AnonymousDump from 'components/anonymous'


const mapStateToProps = state => {
	return {
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) =>{
	return {
		...stateProps,
		...dispatchProps,
		...ownProps
	}
}


const AnonymousSmart = connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(WithImmutablePropsToJs(AnonymousDump))

export default AnonymousSmart