import React from "react";
import { connect } from 'react-redux';
import { View, Text } from "react-native";

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
        console.log(this.props.postsState)
        // const { posts } = this.props.postsState;
        return (
            <View>
                <Text>Hello World</Text>
                {/* {posts.map(element => (
                    <PostItem {...element} key={String(element.id)} />
                ))} */}

            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        postsState: state.posts,
    }
};

export default connect(mapStateToProps)(Posts);