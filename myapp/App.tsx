import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import AgentChat from './AgentChat';

const messages = [
  { agentName: 'Agent 1', message: 'Hello! How can I assist you today?' },
  { agentName: 'Agent 2', message: 'Analyzing the input. One moment...' },
];

export default function App() {
  const [showResult, setShowResult] = React.useState(false);

  return (
    <SafeAreaView>
      <Button title="Launch chat!" onPress={() => setShowResult(true)}></Button>
      {showResult && <AgentChat />}
    </SafeAreaView>
  );
}
