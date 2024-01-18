const { default: Subscriber } = require("../models/subscriberModel");

exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSubscriberById = async (req, res) => {
  const { id } = req.params;
  try {
    const subscriber = await Subscriber.findOne({ _id: id });
    res.json(subscriber);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSubscriber = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newSubscriber = new Subscriber({ name, email });
    const savedSubscriber = await newSubscriber.save();
    res.status(201).json(savedSubscriber);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateSubscriber = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedSubscriber = await Subscriber.findOneAndUpdate(
      { _id: id },
      { name, email },
      { new: true, runValidators: true }
    );
    if (!updatedSubscriber) {
      return res.status(404).json({ error: "Subscriber non trouvé !" });
    }
    res.json(updatedSubscriber);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSubscriber = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSubscriber = await Subscriber.findOneAndDelete({ _id: id });
    if (!deletedSubscriber) {
      return res.status.json({ error: "Subscriber pas trouvé" });
    }
    res.json(deletedSubscriber);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
