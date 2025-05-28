from fastapi import FastAPI
from app.api import agent_router

app = FastAPI()
app.include_router(agent_router.router)