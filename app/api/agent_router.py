from fastapi import APIRouter, Request
from app.agents.agent_manager import run_agent

router = APIRouter()

@router.post("/predict")
async def predict(request: Request):
    data = await request.json()
    user_input = data.get("input")
    result = run_agent(user_input)
    return {"response": result}