from autogen import AssistantAgent, UserProxyAgent

def run_agent(input_text: str) -> str:
    user_proxy = UserProxyAgent(name="User", system_message="You are a user.")
    assistant = AssistantAgent(name="Assistant", system_message="You are an assistant that responds helpfully.")
    user_proxy.initiate_chat(assistant, message=input_text)
    return assistant.last_message()['content'] if assistant.last_message() else "No response"