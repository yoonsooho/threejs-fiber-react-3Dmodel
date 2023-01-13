# threejs-fiber-react-3Dmodel

3D모델을 다운 후 npx gltfjsx public/shiba/scene.gltf 입력 할 경우 Scene.jsx가 생성되는데 그 후 
useGLTF("scene.gltf") => useGLTF("./public/shiba/scene.gltf")

useGLTF.preload("scene.gltf") => useGLTF.preload("./public/shiba/scene.gltf")

이러한 경로를 위의 예시 처럼 맞는 경로로 수정한 후 사용 가능
