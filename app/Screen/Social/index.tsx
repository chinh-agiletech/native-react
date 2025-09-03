// screens/SocialFeedScreen.tsx
import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator, RefreshControl, Text } from "react-native";
import PostItem from "@/components/ui/PostItem/PostItem";
import { Post } from "@/components/ui/types/Post";

// Mock data
const mockPosts: Post[] = [
  {
    id: 1,
    user: "Alice",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "Hello world! My first post",
    likes: 5,
    comments: 2,
    image: "https://placekitten.com/300/200",
  },
  {
    id: 2,
    user: "Bob",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "React Native is awesome!",
    likes: 10,
    comments: 3,
  },
  {
    id: 3,
    user: "Charlie",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "Check out this photo!",
    likes: 2,
    comments: 0,
    image: "https://placekitten.com/400/300",
  },
];

const SocialFeedScreen: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadPosts = async () => {
    try {
      // giả lập fetch API
      await new Promise((res) => setTimeout(res, 1000));
      setPosts(mockPosts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadPosts();
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostItem post={item} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={<Text style={styles.emptyText}>No posts available</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: "#f0f2f5" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { textAlign: "center", marginTop: 20, color: "#555" },
});

export default SocialFeedScreen;
