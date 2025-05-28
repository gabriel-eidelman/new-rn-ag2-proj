import os
from autogen import LLMConfig

llm_config = LLMConfig(
    config_list=[
        {
            "api_type": "azure",
            "api_key": os.environ["OPENAI_API_KEY"],
            "api_version": "version",
            "base_url": "url",
            "model": "gpt-4o-mini",  # Must match the model your deployment refers to
        }
    ],
    temperature=0.7
)
