// AgentChat.tsx
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface AgentResponse {
  title: string;
  objectives: string;
  script: string;
}

type AgentChatProps = {
//   messages: AgentMessage[];
};

const AgentChat: React.FC<AgentChatProps> = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<AgentResponse | null>(null);

    const handleTap = async () => {
        setLoading(true);
        const response = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({ input: "some user data" })
        });
        const data = await response.json();
        const raw = data.response;

        const title = raw.match(/<title>(.*?)<\/title>/)?.[1] || "No title";
        const objectives = raw.match(/<learning_objectives>(.*?)<\/learning_objectives>/s)?.[1] || "No objectives";
        const script = raw.match(/<script>(.*?)<\/script>/s)?.[1] || "No script";


        setResult({ title, objectives, script });
        setLoading(false);
    };
      
    useEffect(() => {
        handleTap();
    }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
  
        <View style={styles.messageBlock}>
          <Text style={styles.agentName}>Helpful Agent:</Text>
            {result && (
            <>
                <Text style={styles.agentName}>Title:</Text>
                <Text style={styles.messageText}>{result.title}</Text>

                <Text style={styles.agentName}>Objectives:</Text>
                <Text style={styles.messageText}>{result.objectives}</Text>

                <Text style={styles.agentName}>Script:</Text>
                <Text style={styles.messageText}>{result.script}</Text>
            </>
            )}
          <View style={styles.divider} />
        </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  messageBlock: {
    marginBottom: 20,
  },
  agentName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  divider: {
    marginTop: 12,
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default AgentChat;
