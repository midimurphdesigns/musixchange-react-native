import React from "react";
import { connect } from 'react-redux';
import { View } from "react-native";

import { fetchPosts } from '../actions/postActions';
import PostItem from './PostItem';

export class Posts extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }

    static navigationOptions = {
        title: 'Posts',
    };

    render() {
        const { posts } = this.props.postsState;
        return (
            <View style={styles.container}>

                {posts.map(element => (
                    <PostItem {...element} key={String(element.id)} />
                ))}

            </View>
        ); 
    }
}

const mapStateToProps = state => ({
    postsState: state.post,
});

export default connect(mapStateToProps)(Posts);