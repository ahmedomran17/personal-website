import ProjectDetailTemplate from '../../components/ProjectDetailTemplate';

const SkinCancerClassification = () => {
  const projectData = {
    title: "Deep Learning for Skin Cancer Classification",
    subtitle: "Leveraging CNNs and Transfer Learning for Early Melanoma Detection",
    heroImage: "/personal-website/skin-classifier-images/Primary model Architecture.jpg",
    description: "This project aimed to develop an AI-powered diagnostic tool capable of detecting skin cancer from dermoscopic images with dermatologist-level accuracy. Using the ISIC 2019 dataset of over 25,000 images across eight lesion types, our team explored deep learning methods to classify both malignant and benign cases. By fine-tuning a ResNet-50 model and implementing data preprocessing strategies, we sought to improve accessibility and accuracy in skin cancer screening, particularly in areas with limited medical expertise.",
    
    techSpecs: [
      {
        category: "Dataset",
        items: [
          "ISIC 2019 Challenge Dataset – 25,331 dermoscopic images",
          "8 lesion classes (e.g., MEL, NV, BCC, AK, etc.)",
          "Balanced binary split: cancerous vs. non-cancerous"
        ]
      },
      {
        category: "Model Architecture",
        items: [
          "Pretrained ResNet-50 backbone (frozen base layers)",
          "Custom 1×1 Conv layer (2048 → 256 channels)",
          "Two fully connected layers for final classification"
        ]
      },
      {
        category: "Training Strategy",
        items: [
          "Frozen ResNet feature extractor",
          "Adam optimizer, LR 1e-5 to 1e-4",
          "Data augmentation & oversampling for minority classes"
        ]
      }
    ],

    challenges: [
      {
        title: "Severe Class Imbalance",
        problem: "The dataset was heavily skewed toward Melanocytic Nevus (NV), leading to biased predictions.",
        solution: "Applied oversampling, targeted augmentation, and eventually reduced the problem to binary classification."
      },
      {
        title: "Limited Improvement from Augmentation",
        problem: "Initial data augmentation strategies failed to yield significant accuracy gains.",
        solution: "Refocused the classification task to clinically actionable categories, improving accuracy and reducing false negatives."
      }
    ],

    gallery: [
      {
        src: "/personal-website/skin-classifier-images/dataset distribution.png",
        caption: "Class distribution in dataset"
      },
      {
        src: "/personal-website/skin-classifier-images/sample images.png",
        caption: "Sample dermoscopic images from the dataset"
      },
      {
        src: "/personal-website/skin-classifier-images/primary model accuracy.png",
        caption: "Training and validation accuracy/loss curves"
      },
      {
        src: "/personal-website/skin-classifier-images/binary_confusion.png",
        caption: "Confusion matrix for binary classification (class 0: non-cancerous) (class 1: cancerous)"
      },
      {
        src: "/personal-website/skin-classifier-images/primary_confusion.png",
        caption: "8-class confusion matrix for multi-class classification"
      },
      {
        src: "/personal-website/skin-classifier-images/baseline_architecture.png",
        caption: "Baseline model architecture overview"
      }
    ],

    videos: [
      {
        title: "Model Prediction Demo",
        url: "/personal-website/skin-classifier-images/model_demo.mp4",
        caption: "Model prediction demo"
      }
    ],

    outcomes: [
      "Final binary model achieved 77% test accuracy, improving from ~61% in multi-class setup.",
      "Reduced false negative rate to 6.1%, prioritizing early cancer detection safety.",
      "Demonstrated clinical relevance by aligning model outputs with dermatologists' diagnostic priorities."
    ],



    nextProject: {
      title: "Steering Assembly",
      slug: "steering-assembly"
    },
    
    prevProject: {
      title: "Robotic Hand",
      slug: "robotic-hand"
    }
  };

  return <ProjectDetailTemplate {...projectData} />;
};

export default SkinCancerClassification;
