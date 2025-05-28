# React Native + FastAPI + AG2 Full Stack Template

This is a comprehensive template for getting jumpstarted with an integrated full stack environment, with a React Native frontend and a FastAPI/AG2 backend. It's great for creating projects quickly and testing/iterating.

DEMO SPEEDRUN:

https://github.com/user-attachments/assets/4035c9de-e2cc-4baf-b9bd-8db35abad3ce

## Setup
First clone the template with a clean commit history by click the 'Use This Template' button and name your project. Next run 
```
git clone <your-project-directory>
cd your-project-directory
```
to create a local clone.

Next make sure you have the following dependencies installed: 

```
brew install node
brew install watchman
```

Next you can create your virtual environment, and install the necessary requirements

```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
Now the backend should be setup. To create the frontend, use our automated create-frontend.sh file:
First change the PROJECT_NAME variable to match the name of your project. Next from your root project directory run: 
```
./create-frontend.sh
```

Next, to start the project on xcode simulator,
```
pod install
npm start
```
Then you can build the project in xcode and run it on a simulator!

## Run
```bash
uvicorn app.main:app --reload
```

## Environment Variables
```
Make sure that in your ~/.bashrc file you have your llm key. Refer to the ag2 user guide for more information.

```

## AG2 Agent
Edit `app/agents/agent_manager.py` to define agent behavior! Refer to https://docs.ag2.ai/latest/docs/user-guide/basic-concepts/overview/ for more info. Happy coding!
