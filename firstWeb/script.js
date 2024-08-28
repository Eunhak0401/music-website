document.getElementById('fileUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        document.querySelector('.body_in_button').style.display = 'none';
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileName').style.display = 'block';
    }
});

        // 이미지 배경 파일 처리
        document.getElementById('fileUploadImage').addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const base64Image = e.target.result;
                    sessionStorage.setItem('imageFile', base64Image); // Base64 이미지 데이터를 sessionStorage에 저장
                    document.getElementById('fileNameImage').textContent = file.name; // 이미지 파일 이름 표시
                    document.getElementById('uploadedImageBackground').src = base64Image; // 이미지 표시
                };
                reader.readAsDataURL(file); // 파일을 Base64로 인코딩
            }
        });

        // 중앙 이미지 파일 처리
        document.getElementById('fileUploadCenterImage').addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const base64Image = e.target.result;
                    sessionStorage.setItem('centerImageFile', base64Image); // Base64 중앙 이미지 데이터를 sessionStorage에 저장
                    document.getElementById('fileNameCenterImage').textContent = file.name; // 이미지 파일 이름 표시
                    document.getElementById('uploadedCenterImage').src = base64Image; // 이미지 표시
                };
                reader.readAsDataURL(file); // 파일을 Base64로 인코딩
            }
        });

        // 오디오 파일 처리
        document.getElementById('fileUploadAudio').addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const base64Audio = e.target.result;
                    sessionStorage.setItem('audioFile', base64Audio); // Base64 오디오 데이터를 sessionStorage에 저장
                    document.getElementById('fileNameAudio').textContent = file.name; // 오디오 파일 이름 표시
                    document.getElementById('bgMusic').src = base64Audio; // 오디오 소스 설정
                };
                reader.readAsDataURL(file); // 파일을 Base64로 인코딩
            }
        });

        // "Play Web" 버튼을 클릭했을 때 파일을 실행하는 함수
        function playFiles() {
            document.getElementById('displaySection').style.display = 'block'; // 파일을 표시하는 섹션을 보여줌

            const base64Image = sessionStorage.getItem('imageFile');
            const base64CenterImage = sessionStorage.getItem('centerImageFile');
            const base64Audio = sessionStorage.getItem('audioFile');

            if (base64Image) {
                document.getElementById('uploadedImageBackground').src = base64Image; // 저장된 이미지 데이터를 설정
            }

            if (base64CenterImage) {
                document.getElementById('uploadedCenterImage').src = base64CenterImage; // 저장된 중앙 이미지 데이터를 설정
            }

            if (base64Audio) {
                const audioElement = document.getElementById('bgMusic');
                audioElement.src = base64Audio; // 저장된 오디오 데이터를 설정
                audioElement.play(); // 오디오 재생
            }
        }