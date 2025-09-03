// components/PostItem.tsx
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Post } from "../types/Post";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <Text style={styles.user}>{post.user}</Text>
      </View>

      {/* Content */}
      <Text style={styles.content}>{post.content}</Text>
      {post.image && <Image source={{ uri: post.image }} style={styles.image} />}

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => setLikes(likes + 1)}>
          <Text style={styles.actionText}>❤️ {likes}</Text>
        </TouchableOpacity>
        <Text style={styles.actionText}>💬 {post.comments}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 2,
  },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  user: { fontWeight: "bold", fontSize: 16 },
  content: { fontSize: 14, color: "#333", marginBottom: 8 },
  image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 8 },
  actions: { flexDirection: "row", justifyContent: "space-between" },
  actionText: { fontSize: 14, fontWeight: "bold", color: "#555" },
});

export default React.memo(PostItem);
