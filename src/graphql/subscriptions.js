/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog($owner: String!) {
  onCreateBlog(owner: $owner) {
    id
    name
    posts {
      items {
        id
        title
        content
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const onUpdateBlog = `subscription OnUpdateBlog($owner: String!) {
  onUpdateBlog(owner: $owner) {
    id
    name
    posts {
      items {
        id
        title
        content
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const onDeleteBlog = `subscription OnDeleteBlog($owner: String!) {
  onDeleteBlog(owner: $owner) {
    id
    name
    posts {
      items {
        id
        title
        content
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const onCreatePost = `subscription OnCreatePost($owner: String!) {
  onCreatePost(owner: $owner) {
    id
    title
    content
    blog {
      id
      name
      posts {
        nextToken
      }
      owner
    }
    comments {
      items {
        id
        content
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost($owner: String!) {
  onUpdatePost(owner: $owner) {
    id
    title
    content
    blog {
      id
      name
      posts {
        nextToken
      }
      owner
    }
    comments {
      items {
        id
        content
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const onDeletePost = `subscription OnDeletePost($owner: String!) {
  onDeletePost(owner: $owner) {
    id
    title
    content
    blog {
      id
      name
      posts {
        nextToken
      }
      owner
    }
    comments {
      items {
        id
        content
        owner
      }
      nextToken
    }
    owner
  }
}
`;
export const onCreateComment = `subscription OnCreateComment($owner: String!) {
  onCreateComment(owner: $owner) {
    id
    content
    post {
      id
      title
      content
      blog {
        id
        name
        owner
      }
      comments {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment($owner: String!) {
  onUpdateComment(owner: $owner) {
    id
    content
    post {
      id
      title
      content
      blog {
        id
        name
        owner
      }
      comments {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment($owner: String!) {
  onDeleteComment(owner: $owner) {
    id
    content
    post {
      id
      title
      content
      blog {
        id
        name
        owner
      }
      comments {
        nextToken
      }
      owner
    }
    owner
  }
}
`;
